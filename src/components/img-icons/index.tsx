import styles from "./index.module.scss";

import { TOKEN_MAPS, TOKEN_SYMBOL_ENUM } from "@/common/tokens";

const _TOKEN_MAPS = TOKEN_MAPS[1];

export const Logo = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/logo_N.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Logo"
    />
  );
};

export const LogoMini = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/logo_mini.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Logo"
    />
  );
};

export const LogoGreen = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/WEN_LOGO_GREEN.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Logo"
    />
  );
};

export const LogoRed = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/wen_red.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Logo"
    />
  );
};

export const WenIcon = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={_TOKEN_MAPS[TOKEN_SYMBOL_ENUM.WEN].icon}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Logo"
    />
  );
};

export const ESWENIcon = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={_TOKEN_MAPS[TOKEN_SYMBOL_ENUM.esWEN].icon}
      width={width}
      height={height}
      style={{ ...style }}
      alt="esWEN"
    />
  );
};

export const WENUSDIcon = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={_TOKEN_MAPS[TOKEN_SYMBOL_ENUM.wenUSD].icon}
      width={width}
      height={height}
      style={{ ...style }}
      alt="wenUSD"
    />
  );
};

export const Twitter = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/social/twitter.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Twitter"
    />
  );
};

export const Discord = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/social/discord.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Discord"
    />
  );
};

export const Docs = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/social/docs.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Docs"
    />
  );
};

export const Mask = (props: any) => {
  const { style, width, height } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/mask.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="Mask"
    />
  );
};

export const EthIcon = (props: any) => {
  const { style, width, height, className } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/tokens/eth.png"}
      width={width}
      height={height}
      alt="eth"
      className={className}
      style={{ ...style }}
    />
  );
};

export const TOKEN_ETH = (props: any) => {
  const { icon } = props;
  return (
    <div className={styles.token_pair}>
      <img alt="wstETH" src={icon} width={50} />
      <EthIcon width="24" height="24" style={{ position: "absolute", top: 0, right: 0 }} />
    </div>
  );
};

export const LP = (props: any) => {
  return (
    <div className="relative">
      <LogoGreen width="32" />
      <EthIcon
        width="14"
        height="14"
        style={{ position: "absolute", top: "-4px", right: "-4px" }}
      />
    </div>
  );
};

export const WENUSD_USDC = (props: any) => {
  const { style, width = 54, height = 32 } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/lp/wenUSD_USDC_n.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="wenUSD_USDC"
    />
  );
};

export const WEN_ETH = (props: any) => {
  const { style, width = 54, height = 32 } = props;
  return (
    <img
      src={"https://wen-protocal-app.4everland.store/lp/wen_ETH.png"}
      width={width}
      height={height}
      style={{ ...style }}
      alt="wenUSD_USDC"
    />
  );
};
