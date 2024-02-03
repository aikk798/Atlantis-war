import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

interface IWalletAvatarProps {
  value: any;
  size?: number;
}

const WalletAvatar = (props: IWalletAvatarProps) => {
  return (
    <Jazzicon
      diameter={props?.size || 24}
      seed={jsNumberForAddress(props?.value)}
    />
  );
};

export default WalletAvatar;
