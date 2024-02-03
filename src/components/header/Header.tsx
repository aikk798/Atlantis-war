import styles from "./Header.module.scss";

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
} from "@chakra-ui/react";
import classnames from "classnames";
import { LogoMini } from "@/components/img-icons";

export interface IHeader {
  sampleTextProp?: string;
}

const Header: React.FC<IHeader> = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isH5] = useMediaQuery("(max-width: 798px)");

  return (
    <div className={classnames(styles.component)}>
      <div className={styles.main}>
        <div className="flex items-center justify-between">{isH5 && <LogoMini width="32" />}</div>
        <div className="flex items-center">
          <div className="flex items-center gap-2">11</div>
          <div className={styles.burger_wrapper} onClick={onToggle}>
            <div className={classnames(styles.burger, isOpen ? styles.burger_active : "")}></div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="#fff">
            <DrawerCloseButton />

            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Header;
