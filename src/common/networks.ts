import { TOKEN_SYMBOL_ENUM } from "@/common/tokens";
import * as Contract_Types from "wen-protocol-v5/types";

export enum NetworkId {
  Local = 1337,
  ETH = 1,
  GOERLI = 5,
}

interface IAddresses {
  [key: number]: { [key: string]: any };
}

export const multiAssetContractMap: IAddresses = {
  [NetworkId.Local]: {
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x6C8f8c16B78802184dafFf53239223d1cb64Dc7A",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0xFF90C691a51e46Fe8D6c661799ab61225e64032F",
      },
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x2FF13ECf32f66EbcB5dD7792FDC60e83a358be9E",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0x2B6EE1A35dAdbCD0Ac4B171755f72f25844F851e",
      },
    },
  },
  [NetworkId.GOERLI]: {
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x6C8f8c16B78802184dafFf53239223d1cb64Dc7A",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0xFF90C691a51e46Fe8D6c661799ab61225e64032F",
      },
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x2FF13ECf32f66EbcB5dD7792FDC60e83a358be9E",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0x2B6EE1A35dAdbCD0Ac4B171755f72f25844F851e",
      },
    },
  },
  [NetworkId.ETH]: {
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x6C8f8c16B78802184dafFf53239223d1cb64Dc7A",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0xFF90C691a51e46Fe8D6c661799ab61225e64032F",
      },
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      TroveManager: {
        factory: Contract_Types.TroveManager__factory,
        address: "0x2FF13ECf32f66EbcB5dD7792FDC60e83a358be9E",
      },
      SortedTrove: {
        factory: Contract_Types.SortedTroves__factory,
        address: "0x2B6EE1A35dAdbCD0Ac4B171755f72f25844F851e",
      },
    },
  },
};

export const addresses: IAddresses = {
  [NetworkId.Local]: {
    [TOKEN_SYMBOL_ENUM.wBETH]: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
    [TOKEN_SYMBOL_ENUM.wstETH]: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    [TOKEN_SYMBOL_ENUM.wenUSD]: "0xE9F89e9FFb1c31db13161DC39C70b23c6eF47CbB",
    [TOKEN_SYMBOL_ENUM.WEN]: "0x7937F9948caDb85f7d52256B60bB0A6C4469ce2c",
    [TOKEN_SYMBOL_ENUM.esWEN]: "0x16d1EAF01498D3b4FE3e1a51C3b7da9263aEcD94",
    [TOKEN_SYMBOL_ENUM.WENUSDQUSDCLP]: "0x5eC58c7DEF28e0C2470cb8bd7Ab9C4ebEd0a86b7",
    [TOKEN_SYMBOL_ENUM.WENQETHLP]: "0x8a91182f6D303899EE641987De853ab66eDC9FaB", //WEN/ETH LP Pair:
    BorrowerOperation: "0xa0C17A21721A59fBdD6805c35c0Bf799ad3DF251",
    StabilityPool: "0x409c646513D369F9190D59C1fdd078D92Ea47232",
    MultiTroveGetter: "0xB19dBCDc7d9FFb4D4AF0097aC4fBeFB2f894774e",
    MultiCollateralHintHelpers: "0x444827355D48ccbCA9D1026F2ECFe9213E875F5B",
    TroveManagerGetters: "0x9c47522f0b96e5Bc9d30CA3B84A334ec9F7e1517",
    ESWENStaking: "0xCAb7DC0B64BeB7067A9F5d94035eCC71980575E3",
    MockOracle: "0x2369a76920d3196d70812407F419A1836Fe447CC",
    Vest: "0xd50195FF6C9f1224Ab5C34D80Dd57f8923fF3332",
    WENUSDQUSDCPool: "0xe0aaFC8807Cd2ef9486E3b611B5eca70771321e8",
    WENQETHPool: "0x2fe1302bBb48945d8177414E427A00f9B1A7636a",
    LPStakingHelpers: "0xB7c4c9990D2234D5D6f65d6747E8C8C8706D9B59",
    liquidationManager: "0xdfeDDb27Df31f505d774992165C4506306fad58e",
  },
  [NetworkId.GOERLI]: {
    [TOKEN_SYMBOL_ENUM.wBETH]: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
    [TOKEN_SYMBOL_ENUM.wstETH]: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    [TOKEN_SYMBOL_ENUM.wenUSD]: "0xE9F89e9FFb1c31db13161DC39C70b23c6eF47CbB",
    [TOKEN_SYMBOL_ENUM.WEN]: "0x7937F9948caDb85f7d52256B60bB0A6C4469ce2c",
    [TOKEN_SYMBOL_ENUM.esWEN]: "0x16d1EAF01498D3b4FE3e1a51C3b7da9263aEcD94",
    [TOKEN_SYMBOL_ENUM.WENUSDQUSDCLP]: "0x5eC58c7DEF28e0C2470cb8bd7Ab9C4ebEd0a86b7",
    [TOKEN_SYMBOL_ENUM.WENQETHLP]: "0x8a91182f6D303899EE641987De853ab66eDC9FaB", //WEN/ETH LP Pair:
    BorrowerOperation: "0xa0C17A21721A59fBdD6805c35c0Bf799ad3DF251",
    StabilityPool: "0x409c646513D369F9190D59C1fdd078D92Ea47232",
    MultiTroveGetter: "0xB19dBCDc7d9FFb4D4AF0097aC4fBeFB2f894774e",
    MultiCollateralHintHelpers: "0x444827355D48ccbCA9D1026F2ECFe9213E875F5B",
    TroveManagerGetters: "0x9c47522f0b96e5Bc9d30CA3B84A334ec9F7e1517",
    ESWENStaking: "0xCAb7DC0B64BeB7067A9F5d94035eCC71980575E3",
    MockOracle: "0x2369a76920d3196d70812407F419A1836Fe447CC",
    Vest: "0xd50195FF6C9f1224Ab5C34D80Dd57f8923fF3332",
    WENUSDQUSDCPool: "0xe0aaFC8807Cd2ef9486E3b611B5eca70771321e8",
    WENQETHPool: "0x2fe1302bBb48945d8177414E427A00f9B1A7636a",
    LPStakingHelpers: "0xB7c4c9990D2234D5D6f65d6747E8C8C8706D9B59",
    liquidationManager: "0xdfeDDb27Df31f505d774992165C4506306fad58e",
  },
  [NetworkId.ETH]: {
    [TOKEN_SYMBOL_ENUM.wBETH]: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
    [TOKEN_SYMBOL_ENUM.wstETH]: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    [TOKEN_SYMBOL_ENUM.wenUSD]: "0xE9F89e9FFb1c31db13161DC39C70b23c6eF47CbB",
    [TOKEN_SYMBOL_ENUM.WEN]: "0x7937F9948caDb85f7d52256B60bB0A6C4469ce2c",
    [TOKEN_SYMBOL_ENUM.esWEN]: "0x16d1EAF01498D3b4FE3e1a51C3b7da9263aEcD94",
    [TOKEN_SYMBOL_ENUM.WENUSDQUSDCLP]: "0x5eC58c7DEF28e0C2470cb8bd7Ab9C4ebEd0a86b7",
    [TOKEN_SYMBOL_ENUM.WENQETHLP]: "0x8a91182f6D303899EE641987De853ab66eDC9FaB", //WEN/ETH LP Pair:
    BorrowerOperation: "0xa0C17A21721A59fBdD6805c35c0Bf799ad3DF251",
    StabilityPool: "0x409c646513D369F9190D59C1fdd078D92Ea47232",
    MultiTroveGetter: "0xB19dBCDc7d9FFb4D4AF0097aC4fBeFB2f894774e",
    MultiCollateralHintHelpers: "0x444827355D48ccbCA9D1026F2ECFe9213E875F5B",
    TroveManagerGetters: "0x9c47522f0b96e5Bc9d30CA3B84A334ec9F7e1517",
    ESWENStaking: "0xCAb7DC0B64BeB7067A9F5d94035eCC71980575E3",
    MockOracle: "0x2369a76920d3196d70812407F419A1836Fe447CC",
    Vest: "0xd50195FF6C9f1224Ab5C34D80Dd57f8923fF3332",
    WENUSDQUSDCPool: "0xe0aaFC8807Cd2ef9486E3b611B5eca70771321e8",
    WENQETHPool: "0x2fe1302bBb48945d8177414E427A00f9B1A7636a",
    LPStakingHelpers: "0xB7c4c9990D2234D5D6f65d6747E8C8C8706D9B59",
    liquidationManager: "0xdfeDDb27Df31f505d774992165C4506306fad58e",
  },
};
interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls?: string[];
  blockExplorerUrls: string[];
  testnet?: boolean;
  image: SVGImageElement | string;
  idoEnable?: boolean;
}

export const NET_WORKS: { [key: number]: INetwork } = {
  [NetworkId.ETH]: {
    chainName: "ETH",
    chainId: NetworkId.ETH,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io"],
    image: "https://www.avestorage.cloud/chain/eth.png",
    idoEnable: true,
  },
  [NetworkId.GOERLI]: {
    chainName: "ETH GOERLI",
    chainId: NetworkId.GOERLI,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://goerli.etherscan.io"],
    image: "https://www.avestorage.cloud/chain/eth.png",
    testnet: true,
    idoEnable: true,
  },
  [NetworkId.Local]: {
    chainName: "ETH-indollar",
    chainId: NetworkId.ETH,
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io"],
    image: "https://www.avestorage.cloud/chain/eth.png",
    testnet: true,
    idoEnable: true,
  },
};

export const getChainBlockExplorerUrls = (chainId = 1) => {
  //@ts-ignore
  return NET_WORKS[chainId]?.blockExplorerUrls[0] || "";
};
