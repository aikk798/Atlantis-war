export const MEDIAS_SRC = {
  twitter: "https://twitter.com/0xWENProtocol",
  discord: "https://discord.gg/ANU2exxAbd",
  document: "https://docs.wenprotocol.io",
};

export const MIN_BRROW_NUM = 1800;

export const MIN_COLLATERAL_RATIO = 1.15;

export const WARM_COLLATERAL_RATIO = 1.5; // < 1.5 : recovery mode

export const SAFE_COLLATERAL_RATIO = 1.8;

export const TCR_THRESHOLD = 150;

export const ICR_THRESHOLD = 115;

export const GAS_COMPENSAATION = "200";

// export const GRAPH_DOMIAN = "https://c2c2-103-152-220-40.ngrok-free.app";
export const GRAPH_DOMIAN = "https://testnet-graph.wenprotocol.io";

export const GRAPH_URL = `${GRAPH_DOMIAN}/subgraphs/name/main`;

export const INDOLLAR_CHAIN = {
  id: 1337,
  name: "WEN-test-PRC",
  network: "WEN-test-PRC",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://testnet-rpc.wenprotocol.io"] },
    default: { http: ["https://testnet-rpc.wenprotocol.io"] },
    // public: {
    //   http: ["https://482a-103-152-220-40.ngrok-free.app"],
    // },
    // default: {
    //   http: ["https://482a-103-152-220-40.ngrok-free.app"],
    // },
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "http://etherscan.io" },
    default: { name: "SnowTrace", url: "http://etherscan.io" },
  },
  testnet: true,
};

export const CURVE_URL = "https://curve.fi";

export const ROLL_DELAY = 10000;
