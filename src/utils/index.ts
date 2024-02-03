import { ethers, BigNumber } from "ethers";
import { ICR_THRESHOLD } from "@/common/constants";
import { NET_WORKS } from "@/common/networks";
import { ceil } from "lodash";
import { WARM_COLLATERAL_RATIO, SAFE_COLLATERAL_RATIO } from "@/common/constants";

export function shortAddress(address: string | any, start = 6, end = 4) {
  if (!address) return "";
  if (address.length <= start * 2) return address;
  return address.slice(0, start) + "..." + address.slice(address.length - end);
}

export const formatNumber = (num: string | number, toFixedNum = 2, needFormat = true) => {
  if (!num && num !== 0) return "";

  const str = Number(num).toFixed(toFixedNum).toString();

  if (!needFormat) {
    return str;
  }

  const [integer, decimal] = str.split(".");

  const integerFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${integerFormatted}.${decimal}`;
};

export const parseEther = (value: string) => {
  try {
    return ethers.utils.parseEther(value);
  } catch (error) {
    return BigNumber.from("0");
  }
};

export const formatEther = (value: BigNumber) => {
  try {
    return ethers.utils.formatEther(value);
  } catch (error) {
    return "";
  }
};

// AccountSlice.ts, AppSlice.ts
export function setAll(state: any, properties: any) {
  if (properties) {
    const props = Object.keys(properties);
    props.forEach((key) => {
      state[key] = properties[key];
    });
  }
}

/**
 *
 * @param TCR
 * @param ICR
 * @param MCR
 * @param isRecoveryMode
 * @returns
 */
export const isCanLiquidate = (TCR: number, ICR: number, MCR: number, isRecoveryMode: boolean) => {
  return isRecoveryMode ? ICR < TCR : ICR < MCR;
};

export const isCanRedeem = (TCR: number, ICR: number) => {
  return ICR > ICR_THRESHOLD && TCR > 150;
};

export const isTestNetwork = (chainId: any) => {
  return !!NET_WORKS[chainId]?.testnet;
};

export function roundFloor(num: number, size = 4): number {
  const factor: number = Math.pow(10, size);
  return Math.round(num * factor) / factor;
}

export function numLongerToShorter(num: string | number): string {
  if (!num) {
    return "";
  }
  if (typeof num == "string") num = Number(num);
  if (num > 1) {
    if (num / 1000000000 > 1) {
      return "" + ceil(num / 100000000, 2) + "B";
    } else if (num / 1000000 > 1) {
      return "" + ceil(num / 1000000, 2) + "M";
    } else if (num / 1000 > 1) {
      return "" + ceil(num / 1000, 2) + "K";
    } else {
      return "" + num;
    }
  } else {
    return "" + roundFloor(num);
  }
}

export const getCRColorName = (CR: string | number) => {
  const _CR = Number(CR);
  if (_CR < WARM_COLLATERAL_RATIO) {
    return "error-color";
  } else if (_CR >= WARM_COLLATERAL_RATIO && _CR <= SAFE_COLLATERAL_RATIO) {
    return "warm-color";
  } else if (_CR > SAFE_COLLATERAL_RATIO) {
    return "safe-color";
  }
  return "";
};
