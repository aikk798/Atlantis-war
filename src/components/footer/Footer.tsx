import styles from "./Footer.module.scss";
export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <div className="flex items-center justify-center ">
          © 2024 Atlantis War. All rights reserved.
        </div>
        <div className="flex items-center justify-center ">
          <a href="https://twitter.com/Atlantis_war" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
