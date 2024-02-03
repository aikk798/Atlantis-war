import styles from "./index.module.scss";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import classnames from "classnames";
import { Button, Spinner, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setShowAccountModal } from "@/slices/commonSlice";
import { shortAddress, formatNumber } from "@/utils";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useAppSelector } from "@/hook";
import { IAccountSlice } from "@/slices/AccountSlice";

export const CustomConnectButton = ({ isH5 }: any) => {
  const { isConnecting, address } = useAccount();
  const { balances } = useAppSelector((state: any) => state.account as IAccountSlice);
  const dispatch = useDispatch();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    size={"sm"}
                    _hover={{
                      opacity: 0.8,
                    }}
                    color="white"
                    borderRadius={50}
                    className="text-center button-primary"
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    size={"sm"}
                    _hover={{
                      opacity: 0.8,
                    }}
                    color="white"
                    style={{ background: "#ff494a" }}
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }
              if (isConnecting) {
                return (
                  <Button
                    _hover={{
                      opacity: 0.8,
                    }}
                    size={"sm"}
                    color="white"
                    className="text-center"
                  >
                    connect
                    {isConnecting && <Spinner style={{ marginLeft: 12 }} size="sm" />}
                  </Button>
                );
              }

              return (
                <div className="flex items-center">
                  <div
                    onClick={openChainModal}
                    className={classnames("flex items-center mr-2", styles.chainIconWrap)}
                  >
                    {chain.hasIcon && (
                      <>
                        {chain.iconUrl && <img src={chain.iconUrl} width={24} height={24} alt="" />}
                        {!isH5 && (
                          <>
                            <span style={{ margin: "0 8px" }}>{chain.name}</span>
                            <MdOutlineKeyboardArrowDown
                              fontSize={16}
                              color={"#8899A8"}
                              className="mr-2"
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>

                  <div className={classnames("flex", "items-center", styles.account_wrap)}>
                    {!isH5 && (
                      <span className={classnames("px-3 flex items-center", styles.balance)}>
                        <Box color={"fontColor.100"} className="mr-1">
                          {formatNumber(balances.ETH)}
                        </Box>
                        ETH
                      </span>
                    )}

                    <Button
                      _hover={{
                        opacity: 0.8,
                      }}
                      size={"sm"}
                      className={classnames("flex", "items-center", styles.btn)}
                      onClick={() => {
                        dispatch(setShowAccountModal(true));
                      }}
                    >
                      <span className="flex items-center cursor-pointer">
                        <span className="mr-2">{shortAddress(address || "")}</span>
                      </span>
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
