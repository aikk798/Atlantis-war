import React, { useState } from "react";
import commonStyles from "@/common.module.scss";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FAUCET_MAPS } from "@/common/tokens";
import STEthMint from "./stEth-mint";
import WBETHMint from "./wBETH-mint";

export default function FaucetButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setLoading(false);
  };

  return (
    <div>
      <Button
        width={120}
        size={"sm"}
        className="button-gray"
        isDisabled={loading}
        onClick={() => setIsOpen(true)}
      >
        Testnet Faucet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          width={400}
          borderRadius={"16px"}
          className={commonStyles.ModalContent}
        >
          <ModalHeader className={commonStyles.ModalHeader}>
            Testnet Faucet
          </ModalHeader>
          <ModalCloseButton as={Box} />
          <ModalBody
            display="flex"
            className="flex flex-col text-base font-medium overflow-hidden"
            style={{ padding: 8 }}
          >
            <List spacing={3} className="rounded-md mb-4">
              {FAUCET_MAPS.map((it) => {
                if (it.href) {
                  return (
                    <a
                      key={it.name}
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ListItem
                        className="flex items-center cursor-pointer rounded-md px-2 py-2"
                        _hover={{
                          backgroundColor: "#F7FAFF",
                        }}
                      >
                        <img
                          src={it.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="mr-2"
                          style={{ borderRadius: "50%" }}
                        />
                        <Box>
                          <p>{it.name}</p>
                        </Box>
                      </ListItem>
                    </a>
                  );
                }
                if (it.symbol === "wstETH") {
                  return (
                    <ListItem
                      className="flex items-center cursor-pointer rounded-md px-2 py-2"
                      _hover={{
                        backgroundColor: "#F7FAFF",
                      }}
                      key={it.name}
                    >
                      <STEthMint
                        name={it.name}
                        icon={it.icon}
                        onSuccess={onClose}
                      />
                    </ListItem>
                  );
                }
                if (it.symbol === "wBETH") {
                  return (
                    <ListItem
                      className="flex items-center cursor-pointer rounded-md px-2 py-2"
                      _hover={{
                        backgroundColor: "#F7FAFF",
                      }}
                      key={it.name}
                    >
                      <WBETHMint
                        name={it.name}
                        icon={it.icon}
                        onSuccess={onClose}
                      />
                    </ListItem>
                  );
                }
              })}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
