import styles from "./index.module.scss";

import { LogoGreen, LogoRed } from "@/components/img-icons";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  description: string | ReactNode;
}

export function CommonTip({ description }: IProps) {
  return (
    <div className={styles.container}>
      <Box width={50} className="flex items-center">
        <LogoGreen width={46} height={46} />
      </Box>

      <div className={styles.text}>
        <div>{description}</div>
      </div>
    </div>
  );
}

export function CommonWarmTip({ description }: IProps) {
  return (
    <div className={classNames(styles.container, styles.warm)}>
      <Box width={50} className="flex items-center">
        <LogoRed width={46} height={46} />
      </Box>

      <div className={styles.text}>
        <div>{description}</div>
      </div>
    </div>
  );
}
