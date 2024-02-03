import styles from "./index.module.scss";

import { Button } from "@chakra-ui/react";
import Logo from "@/assets/img/logo.png";
import Blast from "@/assets/img/blast.png";
import Hill from "@/assets/img/hill.png";
import LogoMini from "@/assets/img/logo_mini.png";
import Cloud1 from "@/assets/img/cloud.png";
import Cloud2 from "@/assets/img/cloud2.png";
import cloud3 from "@/assets/img/cloud3.png";
import Cloud4 from "@/assets/img/cloud.png";
import classNames from "classnames";

export default function Home() {
  return (
    <div className={styles.page}>
      <img src={Cloud1} width={200} className={classNames(styles.Cloud, styles.Cloud1)} />
      <img src={Cloud2} width={160} className={classNames(styles.Cloud, styles.Cloud2)} />
      <img src={cloud3} width={200} className={classNames(styles.Cloud, styles.Cloud3)} />
      <img src={Cloud4} width={140} className={classNames(styles.Cloud, styles.Cloud4)} />
      <header className={styles.header}>
        <div className="flex" style={{ gap: 64 }}>
          <img src={LogoMini} width={50} />
        </div>
        <div className="flex justify-center">
          <img src={Logo} width={240} />
        </div>
        <div className="flex justify-end" style={{ gap: 64 }}>
          <a>Twitter</a>
          <a>DOC</a>
        </div>
      </header>
      <section>
        <div className={styles.banner}>
          <div className={styles.build}>
            Build on
            <img src={Blast} width={140} />
          </div>
          <div className={styles.slogen}>EXPLORE ATLANTIS AND UNCOVER NEW GAMING ADVENTURES</div>
          <div className={styles.des}>
            In The Rich And Mysterious Land Of The Kingdom Of Atlantis, There Lies Both Danger And
            Opportunity; Warriors, Master Your Skills And Seize Fortune!
          </div>
          <Button className={styles.button}>Coming Soon</Button>
        </div>
        <img className={styles.hill} src={Hill} />
      </section>
      <div className={styles.trait}>
        <div>FREE TO EARN</div>
        <div>ASSETS OF YOUR OWN</div>
        <div>BOOST USER YIELDS</div>
      </div>
    </div>
  );
}
