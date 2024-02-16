import styles from "./index.module.scss";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { MEDIAS_SRC, IMG_SRC } from "@/utils/constant";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import { errorToast } from "@/utils/toast";

function scrollToElement(id: string) {
  const targetElement = document.getElementById(`#${id}`);

  targetElement?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    //@ts-ignore
    offset: 20,
  });
}

export default function Header() {
  const [currentMenu, setCurrentMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);

    // 清除滚动事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onToggle = () => {
    setShowMenu((pre) => !pre);
  };

  return (
    <header className={classNames(styles.header, isScrolled ? styles.isScrolled : "")}>
      <div className={styles.content}>
        <a href="/" className="flex items-center my-4 font-bold font-24">
          <img
            src={IMG_SRC.Logo}
            alt="logo"
            width={isScrolled ? 250 : 500}
            height="50"
            className={styles.logo}
          />
        </a>
        <div className={styles.menu_wrap}>
          <div className={styles.menu}></div>
          <div className={styles.medium}>
            {/* <a href={MEDIAS_SRC.twitter} target="_blank">
              <img src={IMG_SRC.Twitter} alt="Twitter" width="20" height={22} />
            </a> */}
            <Button
              className={styles.btn}
              onClick={() => {
                errorToast("coming soon");
              }}
            >
              TESTNET SOON
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
