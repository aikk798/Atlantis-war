import styles from "./index.module.scss";

import { Button } from "@chakra-ui/react";
import Logo from "@/assets/img/logo.png";
import Blast from "@/assets/img/blast.png";
import Hill from "@/assets/img/hill.png";
import LogoMini from "@/assets/img/logo_mini.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="flex" style={{ gap: 64 }}>
          <img src={LogoMini} width={60} />
        </div>
        <div className="flex justify-center">
          <img src={Logo} width={300} />
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
            <img src={Blast} width={170} />
          </div>
          <div className={styles.slogen}>EXPLORE ATLANTIS AND UNCOVER NEW GAMING ADVENTURES</div>
          <div className={styles.des}>
            In the rich and mysterious land of the Kingdom of Atlantis, there lies both danger and
            opportunity; warriors, master your skills and seize fortune!
          </div>
          <Button className={styles.button}>Coming Soon</Button>
        </div>
        <img src={Hill} />
      </section>
      <div className={styles.trait}>
        <div>Free To earn</div>
        <div>Assets of your own</div>
        <div>Boost User Yields</div>
      </div>
    </div>
  );
}
