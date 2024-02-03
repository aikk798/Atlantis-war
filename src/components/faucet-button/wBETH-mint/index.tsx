import React, { useState, useCallback } from "react";
import { Spinner } from "@chakra-ui/react";
import * as Contract_Types from "wen-protocol-v5/types";
import { addresses } from "@/common/networks";
import { fetchSigner } from "@wagmi/core";
import useConnect from "@/hook/useConnect";
import { parseEther } from "@/utils";
import { useDispatch } from "react-redux";
import { loadAppDetails } from "@/slices/AppSlice";
import { loadAccountDetails } from "@/slices/AccountSlice";
import { contractErrorToast, successToast, errorToast } from "@/utils/toast";

interface IProps {
  icon: string;
  name: string;
  onSuccess: () => void;
}

export default function MINT({ icon, name, onSuccess }: IProps) {
  const dispatch = useDispatch();
  const { chain, address } = useConnect();
  const [loading, setLoading] = useState(false);

  const handleComfirm = useCallback(async () => {
    if (loading) return;
    if (!chain?.id) return;
    const signer = await fetchSigner();

    if (!signer) {
      return;
    }

    const contract = Contract_Types.MockWBETH__factory.connect(
      addresses[chain?.id].wBETH,
      signer
    );

    try {
      setLoading(true);
      //@ts-ignore
      const transactionTx = await contract?.mint(address, parseEther("10"));

      if (transactionTx) {
        const tx = await transactionTx.wait();
        if (tx.status === 1) {
          successToast("Mint wBETH: Success");
          dispatch(
            //@ts-ignore
            loadAppDetails({ chainId: chain?.id, address })
          );
          dispatch(
            //@ts-ignore
            loadAccountDetails({ chainId: chain?.id, address })
          );
          setLoading(false);
          onSuccess();
        } else {
          errorToast("Mint wBETH: Failed");
          setLoading(false);
        }
      }
    } catch (error) {
      contractErrorToast(error);
      setLoading(false);
    }
  }, [loading, chain?.id, address, dispatch, onSuccess]);

  return (
    <div
      className="flex items-center justify-between"
      style={{ width: "100%" }}
      onClick={handleComfirm}
    >
      <div className="flex items-center">
        <img
          src={icon}
          alt=""
          width={32}
          height={32}
          className="mr-2"
          style={{ borderRadius: "50%" }}
        />
        <p>{name}</p>
      </div>
      {loading && <Spinner size={"sm"} color="#82d20f" />}
    </div>
  );
}
