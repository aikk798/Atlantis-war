import { TOKEN_SYMBOL_ENUM, TOKEN_MAPS } from "@/common/tokens";
import { addresses } from "@/common/networks";
import { successToast } from "@/utils/toast";

interface IAddWatchAsset {
  symbol: TOKEN_SYMBOL_ENUM;
  chainId: number;
}

export const addWatchAsset = async ({ symbol, chainId = 1 }: IAddWatchAsset) => {
  try {
    const tokenItem = TOKEN_MAPS[chainId][symbol];
    await window.ethereum?.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: addresses[chainId][tokenItem?.symbol],
          symbol: tokenItem?.symbol,
          decimals: tokenItem?.decimals,
          image: tokenItem?.icon,
        },
      },
    });
    successToast("Successfully added");
  } catch (e: any) {}
};
