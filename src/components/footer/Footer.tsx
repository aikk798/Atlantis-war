import styles from "./Footer.module.scss";
export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <div className="flex items-center justify-center ">
          © 2023 by indollar.finance. All right reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
