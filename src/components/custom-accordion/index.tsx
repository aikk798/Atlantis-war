import styles from "./index.module.scss";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import classNames from "classnames";

interface IProps {
  isOpen?: boolean;
  arrowColor?: string;
  arrowSize?: number;
  header: string | ReactNode;
  body: string | ReactNode;
  onToggle?: (a?: string) => void;
}

const Accordion = ({
  isOpen = false,
  arrowColor = "#8899A8",
  arrowSize = 30,
  header,
  body,
  onToggle,
}: IProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggle = useCallback(() => {
    setOpen(!open);
    onToggle?.(String(!open));
  }, [onToggle, open]);

  return (
    <div className={styles.component}>
      <div className={styles.header} onClick={() => toggle()}>
        <div className={styles.headerContent}>{header}</div>
        <MdKeyboardArrowRight
          fontSize={arrowSize}
          color={arrowColor}
          className={classNames(
            styles.arrow,
            open ? styles.arrow_show : styles.arrow_hidden
          )}
        />
      </div>
      <div className={classNames(styles.body, open ? styles.body_open : "")}>
        {body}
      </div>
    </div>
  );
};

export default Accordion;
