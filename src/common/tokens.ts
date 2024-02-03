export enum NetworkId {
  Local = 1337,
  ETH = 1,
  GOERLI = 5,
}

export enum TOKEN_SYMBOL_ENUM {
  ETH = "ETH",
  wstETH = "wstETH",
  wenUSD = "wenUSD",
  WEN = "WEN",
  esWEN = "esWEN",
  wBETH = "wBETH",
  USDC = "USDC",
  WENQETHLP = "WENQETHLP",
  WENUSDQUSDCLP = "WENUSDQUSDCLP",
}
interface ITokenMaps {
  [key: number]: { [key: string]: any };
}

export const TOKEN_MAPS: ITokenMaps = {
  [NetworkId?.Local]: {
    [TOKEN_SYMBOL_ENUM.ETH]: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18,
      showDecimals: 4,
      description: "ETH",
      icon: "https://wen-protocal-app.4everland.store/tokens/eth.png",
    },
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      symbol: "wstETH",
      name: "wstETH",
      decimals: 18,
      showDecimals: 4,
      description: "Lido",
      icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      protocolIcon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/steth/swap",
    },
    [TOKEN_SYMBOL_ENUM.wenUSD]: {
      symbol: "wenUSD",
      name: "wenUSD",
      decimals: 18,
      showDecimals: 2,
      description: " wenUSD",
      icon: "https://wen-protocal-app.4everland.store/tokens/wenUSD_n.png",
    },
    [TOKEN_SYMBOL_ENUM.WEN]: {
      symbol: "WEN",
      name: "WEN",
      decimals: 18,
      showDecimals: 2,
      description: "WEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/wen_n.png",
    },
    [TOKEN_SYMBOL_ENUM.esWEN]: {
      symbol: "esWEN",
      name: "esWEN",
      decimals: 18,
      showDecimals: 2,
      description: "esWEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/esWEN.png",
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      symbol: "wBETH",
      name: "wBETH",
      decimals: 18,
      showDecimals: 4,
      description: "Binance",
      icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/wbeth/swap",
    },
    [TOKEN_SYMBOL_ENUM.USDC]: {
      symbol: "USDC",
      name: "USDC",
      decimals: 18,
      showDecimals: 2,
      description: "USDC",
      icon: "https://wen-protocal-app.4everland.store/tokens/USDC.png",
    },
  },
  [NetworkId?.GOERLI]: {
    [TOKEN_SYMBOL_ENUM.ETH]: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18,
      showDecimals: 4,
      description: "ETH",
      icon: "https://wen-protocal-app.4everland.store/tokens/eth.png",
    },
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      symbol: "wstETH",
      name: "wstETH",
      decimals: 18,
      showDecimals: 4,
      description: "Lido",
      icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      protocolIcon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/steth/swap",
    },
    [TOKEN_SYMBOL_ENUM.wenUSD]: {
      symbol: "wenUSD",
      name: "wenUSD",
      decimals: 18,
      showDecimals: 2,
      description: " wenUSD",
      icon: "https://wen-protocal-app.4everland.store/tokens/wenUSD_n.png",
    },
    [TOKEN_SYMBOL_ENUM.WEN]: {
      symbol: "WEN",
      name: "WEN",
      decimals: 18,
      showDecimals: 2,
      description: "WEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/wen_n.png",
    },
    [TOKEN_SYMBOL_ENUM.esWEN]: {
      symbol: "esWEN",
      name: "esWEN",
      decimals: 18,
      showDecimals: 2,
      description: "esWEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/esWEN.png",
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      symbol: "wBETH",
      name: "wBETH",
      decimals: 18,
      showDecimals: 4,
      description: "Binance",
      icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/wbeth/swap",
    },
    [TOKEN_SYMBOL_ENUM.USDC]: {
      symbol: "USDC",
      name: "USDC",
      decimals: 18,
      showDecimals: 2,
      description: "USDC",
      icon: "https://wen-protocal-app.4everland.store/tokens/USDC.png",
    },
  },
  [NetworkId?.ETH]: {
    [TOKEN_SYMBOL_ENUM.ETH]: {
      symbol: "ETH",
      name: "ETH",
      decimals: 18,
      showDecimals: 4,
      description: "ETH",
      icon: "https://wen-protocal-app.4everland.store/tokens/eth.png",
    },
    [TOKEN_SYMBOL_ENUM.wstETH]: {
      symbol: "wstETH",
      name: "wstETH",
      decimals: 18,
      showDecimals: 4,
      description: "Lido",
      icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      protocolIcon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wstETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/steth/swap",
    },
    [TOKEN_SYMBOL_ENUM.wenUSD]: {
      symbol: "wenUSD",
      name: "wenUSD",
      decimals: 18,
      showDecimals: 2,
      description: " wenUSD",
      icon: "https://wen-protocal-app.4everland.store/tokens/wenUSD_n.png",
    },
    [TOKEN_SYMBOL_ENUM.WEN]: {
      symbol: "WEN",
      name: "WEN",
      decimals: 18,
      showDecimals: 2,
      description: "WEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/wen_n.png",
    },
    [TOKEN_SYMBOL_ENUM.esWEN]: {
      symbol: "esWEN",
      name: "esWEN",
      decimals: 18,
      showDecimals: 2,
      description: "esWEN",
      icon: "https://wen-protocal-app.4everland.store/tokens/esWEN.png",
    },
    [TOKEN_SYMBOL_ENUM.wBETH]: {
      symbol: "wBETH",
      name: "wBETH",
      decimals: 18,
      showDecimals: 4,
      description: "Binance",
      icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
      pool: {
        Icon: "https://wen-protocal-app.4everland.store/tokens/wBETH_n.png",
        stake: TOKEN_SYMBOL_ENUM.wenUSD,
        rewards: [TOKEN_SYMBOL_ENUM.esWEN, TOKEN_SYMBOL_ENUM.wenUSD],
      },
      curveUrl: "https://curve.fi/#/ethereum/pools/wbeth/swap",
    },
    [TOKEN_SYMBOL_ENUM.USDC]: {
      symbol: "USDC",
      name: "USDC",
      decimals: 18,
      showDecimals: 2,
      description: "USDC",
      icon: "https://wen-protocal-app.4everland.store/tokens/USDC.png",
    },
  },
};

export const FAUCET_MAPS = [
  {
    ...TOKEN_MAPS[NetworkId?.ETH][TOKEN_SYMBOL_ENUM.ETH],
    href: "https://goerlifaucet.com/",
  },
  {
    ...TOKEN_MAPS[NetworkId?.ETH][TOKEN_SYMBOL_ENUM.wstETH],
    description: "",
  },
  {
    ...TOKEN_MAPS[NetworkId?.ETH][TOKEN_SYMBOL_ENUM.wBETH],
    description: "wBETH",
  },
];

export const TROVE_TOKENS = [TOKEN_SYMBOL_ENUM.wstETH, TOKEN_SYMBOL_ENUM.wBETH];

export enum COLL_SYMBOL_ENUM {
  wstETH = "wstETH",
  wBETH = "wBETH",
}

export const WALLET_TOKENS = [
  TOKEN_SYMBOL_ENUM.ETH,
  TOKEN_SYMBOL_ENUM.wstETH,
  TOKEN_SYMBOL_ENUM.WEN,
  TOKEN_SYMBOL_ENUM.esWEN,
  TOKEN_SYMBOL_ENUM.wenUSD,
  TOKEN_SYMBOL_ENUM.wBETH,
];
