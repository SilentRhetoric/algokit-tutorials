import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getAssetTransfer(id: string) {
  const asset = await algorand.client.indexer.lookupTransactionByID(id).do();
  return asset;
}
