import { useState, useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function useConect() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { openConnectModal } = useConnectModal();
  const [isConnected, setTsConnected] = useState(false);

  useEffect(() => {
    setTsConnected(!!address);
  }, [address]);

  return {
    isConnected,
    chain,
    chainId: chain?.id || 1,
    address,
    openConnectModal,
  };
}
