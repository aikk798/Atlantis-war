import { fetchSigner, getNetwork, getProvider } from "@wagmi/core";
import { multiAssetContractMap, addresses } from "@/common/networks";
import { COLL_SYMBOL_ENUM } from "@/common/tokens";
import * as Contract_Types from "wen-protocol-v5/types";
import { constants, BigNumber } from "ethers";

export const getBorrowerOperationInstance =
  async (): Promise<Contract_Types.BorrowerOperations> => {
    const network = getNetwork();
    const chainId = network?.chain?.id ?? 1;
    const signer = await fetchSigner();

    if (!signer) {
      throw new Error("Signer is not available");
    }

    return Contract_Types.BorrowerOperations__factory.connect(
      addresses[chainId]?.BorrowerOperation,
      signer
    );
  };

export const getTroveManagerConfig = async (collSymbol: COLL_SYMBOL_ENUM) => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;

  return multiAssetContractMap[chainId][collSymbol]?.TroveManager;
};

export const getTroveManagerInstance = async (
  collSymbol: COLL_SYMBOL_ENUM
): Promise<Contract_Types.TroveManager> => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const signer = await fetchSigner();

  if (!signer) {
    throw new Error("Signer is not available");
  }

  const contractConfig = multiAssetContractMap[chainId][collSymbol]?.TroveManager;
  const factory = contractConfig.factory;
  const address = contractConfig.address;

  return await factory.connect(address, signer);
};

export const getStabilityPoolInstance = async (): Promise<Contract_Types.StabilityPool> => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const signer = await fetchSigner();

  if (!signer) {
    throw new Error("Signer is not available");
  }

  return Contract_Types.StabilityPool__factory.connect(addresses[chainId]?.StabilityPool, signer);
};

export const getSortedTroveInstance = async (
  collSymbol: COLL_SYMBOL_ENUM
): Promise<Contract_Types.SortedTroves> => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const provider = getProvider();

  if (!provider) {
    throw new Error("Provider is not available");
  }

  const contractConfig = multiAssetContractMap[chainId][collSymbol]?.SortedTrove;

  const factory = contractConfig?.factory;
  const address = contractConfig?.address;

  return await factory?.connect(address, provider);
};

export const getMultiCollateralHintHelpersInstance = async () => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const signer = await fetchSigner();

  if (!signer) {
    throw new Error("Signer is not available");
  }

  return Contract_Types.MultiCollateralHintHelpers__factory.connect(
    addresses[chainId]?.MultiCollateralHintHelpers,
    signer
  );
};

export const getLiquidationManagerInstance = async () => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const signer = await fetchSigner();

  if (!signer) {
    throw new Error("Signer is not available");
  }

  return Contract_Types.LiquidationManager__factory.connect(
    addresses[chainId]?.liquidationManager,
    signer
  );
};

export const getMultiTroveGetterInstance = async () => {
  const network = getNetwork();
  const chainId = network?.chain?.id ?? 1;
  const provider = getProvider();

  if (!provider) {
    throw new Error("Signer is not available");
  }

  return Contract_Types.MultiTroveGetter__factory.connect(
    addresses[chainId]?.MultiTroveGetter,
    provider
  );
};

export const findInsertPosition = async (
  collSymbol: COLL_SYMBOL_ENUM,
  nicr: BigNumber
): Promise<{ upperHint: string; lowerHint: string }> => {
  const instance = await getSortedTroveInstance(collSymbol);

  if (!instance) {
    throw new Error("SortedTroveInstance is not available");
  }

  const [upperHint, lowerHint] = await instance.findInsertPosition(
    nicr,
    constants.AddressZero,
    constants.AddressZero
  );

  return { upperHint, lowerHint };
};
