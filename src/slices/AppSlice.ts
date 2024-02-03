import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { setAll } from "@/utils";
import { RootState } from "@/utils/store";
import { addresses, multiAssetContractMap } from "@/common/networks";
import { getProvider } from "@wagmi/core";
import * as Contract_Types from "wen-protocol-v5/types";
import { formatEther, isTestNetwork } from "@/utils";
import { BigNumber } from "ethers";
import { TOKEN_SYMBOL_ENUM, COLL_SYMBOL_ENUM } from "@/common/tokens";
import { getTroveManagerInstance } from "@/contract/libs";
import { GRAPH_INTERFACE_ENUM, queryMaps } from "@/common/graphql";
import apolloClient from "@/utils/apollo-client";

interface IAppProps {
  readonly chainId: number;
  readonly address?: string;
}
interface IGrobal {}
export interface ITroveItem {
  symbol: string;
  isOpenTrove: boolean;
  coll: string;
  debt: string;
  ICR: string;
  CCR: string;
  MCR: string;
  TCR: string;
  liquidationRatio: string;
  surplusBalance: string;
  entireSystemDebt: string;
  globalSystemDebt: string;
  interst: string;
  isRecoverMode: boolean;
  collPrice: string;
  redeemDeadline: number;
  redemptionRateWithDecay: string;
  borrowingRateWithDecay: string;
}
export interface ITrove {
  wstETH: ITroveItem;
  wBETH: ITroveItem;
}
export interface IPool {
  totalWENUSDDeposits: string;
  my_WENUSD_staked: string;
  my_reward_wbETH: string;
  my_reward_wstETH: string;
  my_reward_esWEN: string;
}
export interface IEarn {
  total_wenUSDUSDC_LP_Staked: string;
  total_wenETH_LP_Staked: string;
  total_esWEN_Staked: string;
}

export interface IAppData {
  readonly global: IGrobal;
  readonly pool: IPool;
  readonly earn: IEarn;
  readonly trove: ITrove;
  readonly troveLoading: boolean;
  readonly poolLoading: boolean;
  readonly loading: boolean;
  readonly refetchGlobalLoading: boolean;
}

// app data
export const loadAppDetails = createAsyncThunk(
  "app/loadAppDetails",
  async ({ chainId, address }: IAppProps) => {
    return {};
  }
);

// trove data
export const loadTroveDetails = createAsyncThunk(
  "app/loadTroveDetails",
  async ({ chainId, address }: IAppProps) => {
    const provider = getProvider();
    let TCR = BigNumber.from("0");
    let isRecoverMode = false;

    let wstETH_troveStatus = BigNumber.from("0");
    let wstETH_maxSystemDebt = BigNumber.from("0");
    let wstETH_coll = BigNumber.from("0");
    let wstETH_debt = BigNumber.from("0");
    let wstETH_entireSystemDebt = BigNumber.from("0");
    let wstETH_entireSystemColl = BigNumber.from("0");
    let wstETH_interstDebt = BigNumber.from("0");
    let wstETH_surplusBalances = BigNumber.from("0");
    let wstETH_ICR = BigNumber.from("0");
    let wstETH_interst = BigNumber.from("0");
    let wstETH_MCR = BigNumber.from("0");
    let wstETH_CCR = BigNumber.from("0");
    let wstETH_redeem_deadline = 0;
    let wstETH_redemptionRateWithDecay = BigNumber.from("0");
    let wstETH_borrowingRateWithDecay = BigNumber.from("0");

    let wBETH_troveStatus = BigNumber.from("0");
    let wBETH_maxSystemDebt = BigNumber.from("0");
    let wBETH_coll = BigNumber.from("0");
    let wBETH_debt = BigNumber.from("0");
    let wBETH_entireSystemDebt = BigNumber.from("0");
    let wBETH_entireSystemColl = BigNumber.from("0");
    let wBETH_interstDebt = BigNumber.from("0");
    let wBETH_surplusBalances = BigNumber.from("0");
    let wBETH_ICR = BigNumber.from("0");
    let wBETH_interst = BigNumber.from("0");
    let wBETH_MCR = BigNumber.from("0");
    let wBETH_CCR = BigNumber.from("0");
    let wBETH_redeem_deadline = 0;
    let wBETH_redemptionRateWithDecay = BigNumber.from("0");
    let wBETH_borrowingRateWithDecay = BigNumber.from("0");

    let wBETH_price = BigNumber.from("0");
    let wstETH_price = BigNumber.from("0");

    if (!isTestNetwork(chainId)) {
      // from grapQL
      const { data } = await apolloClient.query({
        query: queryMaps[GRAPH_INTERFACE_ENUM.prices],
      });
      const prices = data?.prices || [];
      const _wBETH_price = prices.find((it: any) => it.name === "WBETHPrice")?.price || "0";
      const _wstETH_price = prices.find((it: any) => it.name === "WstETHPrice")?.price || "0";

      wBETH_price = BigNumber.from(_wBETH_price);
      wstETH_price = BigNumber.from(_wstETH_price);
    } else {
      //from contract mock
      if (addresses[chainId]?.MockOracle) {
        const contract = Contract_Types.MockPriceFeed__factory.connect(
          addresses[chainId]?.MockOracle,
          provider
        );
        wBETH_price = await contract.fetchPrice(addresses[chainId]?.[TOKEN_SYMBOL_ENUM.wBETH]);
        wstETH_price = await contract.fetchPrice(addresses[chainId]?.[TOKEN_SYMBOL_ENUM.wstETH]);
      }
    }

    const { data } = await apolloClient.query({
      query: queryMaps[GRAPH_INTERFACE_ENUM.troveManagerParams],
    });

    const troveManagerParams = data?.troveManagerParams || [];

    if (multiAssetContractMap[chainId][TOKEN_SYMBOL_ENUM.wstETH]?.TroveManager) {
      try {
        const wstETH_troveManagerParams =
          troveManagerParams.find((it: any) => it.name === "WstETHParams") || [];

        wstETH_maxSystemDebt = BigNumber.from(wstETH_troveManagerParams?.maxSystemDebt || "0");
        wstETH_entireSystemDebt = BigNumber.from(
          wstETH_troveManagerParams?.entireSystemDebt || "0"
        );
        wstETH_entireSystemColl = BigNumber.from(
          wstETH_troveManagerParams?.entireSystemColl || "0"
        );
        wstETH_interstDebt = BigNumber.from(wstETH_troveManagerParams?.interstDebt || "0");
        wstETH_MCR = BigNumber.from(wstETH_troveManagerParams?.MCR || "0");
        wstETH_CCR = BigNumber.from(wstETH_troveManagerParams?.CCR || "0");
        wstETH_redeem_deadline = Number(wstETH_troveManagerParams?.redemptionBootstrap || "0");
        wstETH_redemptionRateWithDecay = BigNumber.from(
          wstETH_troveManagerParams?.redemptionRateWithDecay || "0"
        );
        wstETH_borrowingRateWithDecay = BigNumber.from(
          wstETH_troveManagerParams?.borrowingRateWithDecay || "0"
        );

        if (address) {
          const troveManagerInstance = await getTroveManagerInstance(COLL_SYMBOL_ENUM.wstETH);
          wstETH_troveStatus = await troveManagerInstance?.getTroveStatus(address);
          wstETH_ICR = await troveManagerInstance?.getCurrentICR(address, wstETH_price);
          wstETH_surplusBalances = await troveManagerInstance?.surplusBalances(address);
          const entireDebtAndColl = await troveManagerInstance?.getEntireDebtAndColl(address);
          wstETH_coll = entireDebtAndColl?.coll;
          wstETH_debt = entireDebtAndColl?.debt;
          wstETH_interst = await troveManagerInstance?.getTroveInterest(address, wstETH_debt);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (multiAssetContractMap[chainId][TOKEN_SYMBOL_ENUM.wBETH]?.TroveManager) {
      try {
        const wBETH_troveManagerParams =
          troveManagerParams.find((it: any) => it.name === "WBETHParams") || [];

        wBETH_maxSystemDebt = BigNumber.from(wBETH_troveManagerParams?.maxSystemDebt || "0");
        wBETH_entireSystemDebt = BigNumber.from(wBETH_troveManagerParams?.entireSystemDebt || "0");
        wBETH_entireSystemColl = BigNumber.from(wBETH_troveManagerParams?.entireSystemColl || "0");
        wBETH_interstDebt = BigNumber.from(wBETH_troveManagerParams?.interstDebt || "0");
        wBETH_MCR = BigNumber.from(wBETH_troveManagerParams?.MCR || "0");
        wBETH_CCR = BigNumber.from(wBETH_troveManagerParams?.CCR || "0");
        wBETH_redeem_deadline = Number(wBETH_troveManagerParams?.redemptionBootstrap || "0");
        wBETH_redemptionRateWithDecay = BigNumber.from(
          wBETH_troveManagerParams?.redemptionRateWithDecay || "0"
        );
        wBETH_borrowingRateWithDecay = BigNumber.from(
          wBETH_troveManagerParams?.borrowingRateWithDecay || "0"
        );

        if (address) {
          const troveManagerInstance = await getTroveManagerInstance(COLL_SYMBOL_ENUM.wBETH);
          wBETH_troveStatus = await troveManagerInstance?.getTroveStatus(address);
          wBETH_ICR = await troveManagerInstance?.getCurrentICR(address, wBETH_price);
          wBETH_surplusBalances = await troveManagerInstance?.surplusBalances(address);
          const entireDebtAndColl = await troveManagerInstance?.getEntireDebtAndColl(address);
          wBETH_coll = entireDebtAndColl?.coll;
          wBETH_debt = entireDebtAndColl?.debt;
          wBETH_interst = await troveManagerInstance?.getTroveInterest(address, wBETH_debt);
        }
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const { data } = await apolloClient.query({
        query: queryMaps[GRAPH_INTERFACE_ENUM.tcrs],
      });
      const grapTCR = data?.tcrs?.[0]?.TCR;

      const contractTCR = wstETH_entireSystemColl
        .mul(wstETH_price)
        .add(wBETH_entireSystemColl.mul(wBETH_price))
        .div(
          wBETH_entireSystemDebt
            .add(wBETH_interstDebt)
            .add(wstETH_entireSystemDebt)
            .add(wstETH_interstDebt)
        );

      TCR = !isTestNetwork(chainId) ? BigNumber.from(grapTCR) : contractTCR;

      isRecoverMode = TCR.lt(wstETH_CCR); // TCR < CCR
    } catch (error) {
      console.log(error);
    }

    const result = {
      trove: {
        [TOKEN_SYMBOL_ENUM.wstETH]: {
          symbol: TOKEN_SYMBOL_ENUM.wstETH,
          TCR: formatEther(TCR),
          isOpenTrove: wstETH_troveStatus.toNumber() === 1,
          maxSystemDebt: formatEther(wstETH_maxSystemDebt),
          entireSystemColl: formatEther(wstETH_entireSystemColl),
          entireSystemDebt: formatEther(wstETH_entireSystemDebt),
          interstDebt: formatEther(wstETH_interstDebt),
          globalSystemDebt: formatEther(wstETH_maxSystemDebt.add(wstETH_interstDebt)),
          redeemDeadline: wstETH_redeem_deadline,
          availbleToMint: formatEther(wstETH_maxSystemDebt.sub(wstETH_entireSystemDebt)),
          redemptionRateWithDecay: formatEther(wstETH_redemptionRateWithDecay),
          borrowingRateWithDecay: formatEther(wstETH_borrowingRateWithDecay),
          MCR: formatEther(wstETH_MCR),
          CCR: formatEther(wstETH_CCR),
          //user
          coll: formatEther(wstETH_coll),
          debt: formatEther(wstETH_debt),
          surplusBalance: formatEther(wBETH_surplusBalances),
          interst: formatEther(wstETH_interst),
          ICR:
            Number(formatEther(wstETH_debt)) === 0
              ? "0"
              : (Number(formatEther(wstETH_ICR)) * 100).toFixed(2),
          isRecoverMode,
          collPrice: formatEther(wstETH_price),
          liquidationRatio: isRecoverMode ? formatEther(TCR) : formatEther(wstETH_MCR),
        },
        [TOKEN_SYMBOL_ENUM.wBETH]: {
          symbol: TOKEN_SYMBOL_ENUM.wBETH,
          TCR: formatEther(TCR),
          isOpenTrove: wBETH_troveStatus.toNumber() === 1,
          maxSystemDebt: formatEther(wBETH_maxSystemDebt),
          entireSystemColl: formatEther(wBETH_entireSystemColl),
          entireSystemDebt: formatEther(wBETH_entireSystemDebt),
          interstDebt: formatEther(wBETH_interstDebt),
          globalSystemDebt: formatEther(wBETH_entireSystemDebt.add(wBETH_interstDebt)),
          redeemDeadline: wBETH_redeem_deadline,
          availbleToMint: formatEther(wBETH_maxSystemDebt.sub(wBETH_entireSystemDebt)),
          redemptionRateWithDecay: formatEther(wBETH_redemptionRateWithDecay),
          borrowingRateWithDecay: formatEther(wBETH_borrowingRateWithDecay),
          MCR: formatEther(wBETH_MCR),
          CCR: formatEther(wBETH_CCR),
          //user
          coll: formatEther(wBETH_coll),
          debt: formatEther(wBETH_debt),
          surplusBalance: formatEther(wstETH_surplusBalances),
          ICR:
            Number(formatEther(wBETH_debt)) === 0
              ? "0"
              : (Number(formatEther(wBETH_ICR)) * 100).toFixed(2),
          interst: formatEther(wBETH_interst),
          isRecoverMode,
          collPrice: formatEther(wBETH_price),
          liquidationRatio: isRecoverMode ? formatEther(TCR) : formatEther(wBETH_MCR),
        },
      },
    } as unknown as ITrove;

    console.log("=== troveData ===", result);

    return result;
  }
);

// pool data
export const loadPoolDetails = createAsyncThunk(
  "app/loadPoolDetails",
  async ({ chainId, address }: IAppProps) => {
    if (!chainId || !address) return;
    const provider = getProvider();

    let totalWENUSDDeposits = BigNumber.from("0");
    let my_WENUSD_staked = BigNumber.from("0");
    let my_reward_wbETH = BigNumber.from("0");
    let my_reward_wstETH = BigNumber.from("0");
    let my_reward_esWEN = BigNumber.from("0");

    //stability pool
    if (addresses[chainId]?.StabilityPool) {
      try {
        const contract = Contract_Types.StabilityPool__factory.connect(
          addresses[chainId]?.StabilityPool,
          provider
        );
        totalWENUSDDeposits = await contract.getTotalWenUSDDeposits();
        my_WENUSD_staked = await contract.getCompoundedDeposit(address);
        [my_reward_wbETH, my_reward_wstETH] = await contract.getDepositorCollateralGain(address);
        my_reward_esWEN = await contract.claimableReward(address);
      } catch (error) {
        console.log(error);
      }
    }

    const result = {
      pool: {
        totalWENUSDDeposits: formatEther(totalWENUSDDeposits),
        my_WENUSD_staked: formatEther(my_WENUSD_staked),
        my_reward_wbETH: formatEther(my_reward_wbETH),
        my_reward_wstETH: formatEther(my_reward_wstETH),
        my_reward_esWEN: formatEther(my_reward_esWEN),
      },
    } as unknown as IPool;

    console.log("=== poolData ===", result);

    return result;
  }
);

// earn  data
export const loadEarnDetails = createAsyncThunk(
  "app/loadEarnDetails",
  async ({ chainId }: IAppProps) => {
    if (!chainId) return;
    const provider = getProvider();

    let total_wenUSDUSDC_LP_Staked = BigNumber.from("0");
    let total_wenETH_LP_Staked = BigNumber.from("0");
    let total_esWEN_Staked = BigNumber.from("0");

    if (addresses[chainId]?.WENUSDQUSDCPool) {
      try {
        const contract = Contract_Types.WenUSDQUSDCPool__factory.connect(
          addresses[chainId]?.WENUSDQUSDCPool,
          provider
        );
        total_wenUSDUSDC_LP_Staked = await contract.totalSupply();
      } catch (error) {
        console.log(error);
      }
    }

    if (addresses[chainId]?.WENQETHPool) {
      try {
        const contract = Contract_Types.WenQETHPool__factory.connect(
          addresses[chainId]?.WENQETHPool,
          provider
        );
        total_wenETH_LP_Staked = await contract.totalSupply();
      } catch (error) {
        console.log(error);
      }
    }

    if (addresses[chainId]?.ESWENStaking) {
      try {
        const contract = Contract_Types.EsWenStaking__factory.connect(
          addresses[chainId]?.ESWENStaking,
          provider
        );
        total_esWEN_Staked = await contract.totalStakes();
      } catch (error) {
        console.log(error);
      }
    }

    const result = {
      earn: {
        total_wenUSDUSDC_LP_Staked: formatEther(total_wenUSDUSDC_LP_Staked),
        total_wenETH_LP_Staked: formatEther(total_wenETH_LP_Staked),
        total_esWEN_Staked: formatEther(total_esWEN_Staked),
      },
    } as unknown as IEarn;

    console.log("=== earn Data ===", result);

    return result;
  }
);

const initialState = {
  global: {},
  pool: {},
  earn: {
    total_wenUSDUSDC_LP_Staked: "0",
    total_wenETH_LP_Staked: "0",
  },
  trove: {
    wstETH: {
      isOpenTrove: false,
    },
    wBETH: {
      isOpenTrove: false,
    },
  },
  troveLoading: true,
  loading: true,
  refetchGlobalLoading: false,
} as IAppData;

// Then, handle actions in your reducers:
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    fetchAppSuccess(state, action) {
      setAll(state, action.payload);
    },
    resetData(state) {
      state.global = {
        ...initialState.global,
      };
      state.trove = {
        ...initialState.trove,
      };
      state.pool = {
        ...initialState.pool,
      };
      state.earn = {
        ...initialState.earn,
      };
      state.troveLoading = true;
      state.poolLoading = true;
      state.loading = true;
      state.refetchGlobalLoading = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      /********* trove *********/
      .addCase(loadTroveDetails.pending, (state, action) => {
        const { meta } = action || {};
        const { arg } = meta || {};
        //@ts-ignore
        const { mode } = arg || {};
        if (mode === "SILENT") {
          state.refetchGlobalLoading = true;
        }
      })
      .addCase(loadTroveDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.troveLoading = false;
        state.refetchGlobalLoading = false;
      })
      .addCase(loadTroveDetails.rejected, (state, { error }) => {
        state.troveLoading = false;
        state.refetchGlobalLoading = false;
        console.error(error.name, error.message, error.stack);
      })
      /********* pool *********/
      .addCase(loadPoolDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.poolLoading = false;
      })
      .addCase(loadPoolDetails.rejected, (state, { error }) => {
        state.poolLoading = false;
        console.error(error.name, error.message, error.stack);
      })
      /********* earn *********/
      .addCase(loadEarnDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
      })
      .addCase(loadEarnDetails.rejected, (state, { error }) => {
        console.error(error.name, error.message, error.stack);
      });
  },
});

export default appSlice.reducer;

export const { fetchAppSuccess, resetData } = appSlice.actions;

const baseInfo = (state: RootState) => state.app;

export const getAppState = createSelector(baseInfo, (app) => app);
