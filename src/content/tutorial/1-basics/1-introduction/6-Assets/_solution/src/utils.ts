import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getAsset(id: bigint) {
  const asset = await algorand.asset.getById(id);
  return asset;
}
