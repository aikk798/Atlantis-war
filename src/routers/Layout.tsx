import { useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useDispatch } from "react-redux";

import { loadPoolDetails, loadTroveDetails } from "@/slices/AppSlice";
import { loadAccountDetails } from "@/slices/AccountSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const chainId = chain?.id || 1;

  useEffect(() => {
    if (address) {
      //@ts-ignore
      dispatch(loadAccountDetails({ chainId, address }));
    }
    //@ts-ignore
    dispatch(loadTroveDetails({ chainId, address }));

    //@ts-ignore
    dispatch(loadPoolDetails({ chainId, address }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chainId]);

  return null;
}
