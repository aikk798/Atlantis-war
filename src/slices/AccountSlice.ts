import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { setAll } from "@/utils";
import { RootState } from "@/utils/store";
import { addresses } from "@/common/networks";
import { TOKEN_SYMBOL_ENUM } from "@/common/tokens";
import { fetchBalance } from "@wagmi/core";
import { formatEther } from "@/utils";
import * as Contract_Types from "wen-protocol-v5/types";
import { getProvider } from "@wagmi/core";

interface IAccout {
  readonly chainId: number;
  readonly address: string;
}

// First, create the thunk
export const loadAccountDetails = createAsyncThunk("account/loadAccountDetails", async ({ chainId, address }: IAccout) => {
  const provider = getProvider();

  // balance
  let ETH = "0.00";
  let wstETH = "0.00";
  let wenUSD = "0.00";
  let WEN = "0.00";
  let esWEN = "0.00";
  let wBETH = "0.00";
  let USDC = "0.00";

  let WENQETHLP = "0.00";
  let WENUSDQUSDCLP = "0.00";

  try {
    const balance = await fetchBalance({
      //@ts-ignore
      address,
    });

    ETH = balance?.formatted || "0";
  } catch (e) {
    console.log(e);
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.wstETH]) {
    try {
      const contract = Contract_Types.IERC20__factory.connect(addresses[chainId][TOKEN_SYMBOL_ENUM.wstETH], provider);

      const balance = await contract.balanceOf(address);
      wstETH = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.wenUSD]) {
    try {
      const contract = Contract_Types.IERC20__factory.connect(addresses[chainId][TOKEN_SYMBOL_ENUM.wenUSD], provider);
      const balance = await contract.balanceOf(address);
      wenUSD = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.WEN]) {
    try {
      const contract = Contract_Types.IERC20__factory.connect(addresses[chainId][TOKEN_SYMBOL_ENUM.WEN], provider);
      const balance = await contract.balanceOf(address);

      WEN = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.esWEN]) {
    try {
      const contract = Contract_Types.IERC20__factory.connect(addresses[chainId][TOKEN_SYMBOL_ENUM.esWEN], provider);
      const balance = await contract.balanceOf(address);
      esWEN = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.wBETH]) {
    try {
      const contract = Contract_Types.IERC20__factory.connect(addresses[chainId][TOKEN_SYMBOL_ENUM.wBETH], provider);
      const balance = await contract.balanceOf(address);
      wBETH = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.WENQETHLP]) {
    try {
      const contract = Contract_Types.ICurveMetaPool__factory.connect(addresses[chainId]?.[TOKEN_SYMBOL_ENUM.WENQETHLP], provider);
      const balance = await contract.balanceOf(address);
      WENQETHLP = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  if (addresses[chainId]?.[TOKEN_SYMBOL_ENUM.WENUSDQUSDCLP]) {
    try {
      const contract = Contract_Types.ICurveMetaPool__factory.connect(addresses[chainId]?.[TOKEN_SYMBOL_ENUM.WENUSDQUSDCLP], provider);
      const balance = await contract.balanceOf(address);
      WENUSDQUSDCLP = formatEther(balance);
    } catch (e) {
      console.log(e);
    }
  }

  const result = {
    balances: {
      ETH,
      wstETH,
      wenUSD,
      WEN,
      esWEN,
      wBETH,
      USDC,
      WENQETHLP,
      WENUSDQUSDCLP,
    },
  };

  console.log("=== accountData ===", result);
  return result;
});

export interface IAccountSlice {
  balances: {
    ETH: string;
    wstETH: string;
    wenUSD: string;
    WEN: string;
    esWEN: string;
    wBETH: string;
    USDC: string;
    WENQETHLP: string;
    WENUSDQUSDCLP: string;
  };
  loading: boolean;
}

const initialState = {
  balances: {
    ETH: "0.00",
    wstETH: "0.00",
    wenUSD: "0.00",
    WEN: "0.00",
    esWEN: "0.00",
    wBETH: "0.00",
    USDC: "0.00",
    WENQETHLP: "0.00",
    WENUSDQUSDCLP: "0.00",
  },
  loading: false,
} as IAccountSlice;

// Then, handle actions in your reducers:
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    fetchAccountSuccess(state, action) {
      setAll(state, action.payload);
    },
    resetData(state) {
      state.balances = {
        ...initialState.balances,
      };
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loadAccountDetails.pending, (state, action) => {
        const { meta } = action || {};
        const { arg } = meta || {};
        //@ts-ignore
        const { mode } = arg || {};
        if (mode !== "SILENT") {
          state.loading = true;
        }
      })
      .addCase(loadAccountDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(loadAccountDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.error(error.name, error.message, error.stack);
      });
  },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess, resetData } = accountSlice.actions;

const baseInfo = (state: RootState) => state.account;

export const getAccountState = createSelector(baseInfo, (account) => account);
