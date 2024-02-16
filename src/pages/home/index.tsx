import styles from "./index.module.scss";
import { Button } from "@chakra-ui/react";
import Header from "@/components/Header";
import classNames from "classnames";
import Blast from "@/assets/blast.png";
import Cloud from "@/assets/cloud.png";
import Banner from "@/assets/banner.png";
import Launch from "@/assets/launch.png";
import Footer from "@/components/footer/Footer";
import { errorToast } from "@/utils/toast";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.section_banner}>
        <div className={styles.section_content}>
          <div className="page-content">
            <div data-aos="fade-up">
              <div className={styles.contentBox}>
                <div className={styles.left}>
                  <div className={styles.build}>
                    Build on
                    <img src={Blast} width={153} />
                  </div>
                  <div className={styles.slogen}>
                    EXPLORE ATLANTIS AND UNCOVER NEW GAMING ADVENTURES
                  </div>
                  <div className={styles.des}>
                    On The Mysterious Land Of Atlantis, Master Your Skills And Game With Friends.
                  </div>
                  <div className={styles.buttonGroup}>
                    <Button
                      className={classNames(styles.btn, styles.btn_1)}
                      onClick={() => {
                        errorToast("coming soon");
                      }}
                    >
                      TESTNET SOON
                    </Button>
                    <a href="https://twitter.com/Atlantis_war" target="_blank">
                      <Button className={classNames(styles.btn, styles.btn_2)}>FOLLOW US</Button>
                    </a>
                  </div>
                </div>
                <div className={styles.right}>
                  <img src={Banner} width={550} />
                  <div className={styles.bg1} />
                  <div className={styles.bg2} />
                  <div className={styles.cloud1} />
                  <div className={styles.cloud2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Cloud} height={75} style={{ position: "relative", top: 2 }} />
      <div className={styles.desContent}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>FREE MINT AND UPGRADE YOUR SBT & GOT SHARES</div>
          <div className={styles.des}>
            In the world of Atlantis, you can Free Mint your exclusive game character and upgrade
            the character level of your SBT. In this mysterious world, you can also socialize with
            friends and share the wealth of Atlantis. Would you like to join?
          </div>
        </div>
        <div className={styles.lunachWrap}>
          <img src={Launch} />
          <div className={styles.right}>
            <div className={styles.title}>
              ATLANTIS <span className={styles.black}> LAUNCH CALENDAR</span>
            </div>
            <ul>
              <li>
                <span className={styles.black}>Dev (End of February):</span> Initial UI/UX design
                and contract code completed. Testnet V1 release expected in two weeks.
              </li>
              <li>
                <span className={styles.black}>Testnet (Early March):</span> Further product
                optimization during testing phase, in collaboration with the community.
              </li>
              <li>
                <span className={styles.black}>Airdrop (Mid March): </span>Airdrop to users of
                Pixel, Frenpet, Sunfollower, Blast Bridge, granting free access to our game.
              </li>
              <li>
                <span className={styles.black}>Mainnet (End of March):</span> Mainnet launch on
                Blast.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
