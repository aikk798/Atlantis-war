import ReactDOM from "react-dom/client";
import RootRouter from "@/routers";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { light } from "@/utils/theme";

import { Provider } from "react-redux";
import store from "@/utils/store";
import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { INDOLLAR_CHAIN } from "@/common/constants";
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/utils/apollo-client";

import "./app.less";

const _chains =
  process.env.NODE_ENV === "development"
    ? [mainnet, goerli, INDOLLAR_CHAIN]
    : [mainnet, goerli, INDOLLAR_CHAIN];

const { chains, provider } = configureChains(_chains, [publicProvider()]);
const projectId = "81daa8b3c0662bac15426a768d528e88";

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      //@ts-ignore
      metaMaskWallet({ projectId, chains, shimDisconnect: true }),
      //@ts-ignore
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          modalSize="compact"
          chains={chains}
          // theme={darkTheme()}
        >
          <ChakraProvider theme={light}>
            <ApolloProvider client={apolloClient}>
              <RootRouter />
              <CSSReset />
            </ApolloProvider>
          </ChakraProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
