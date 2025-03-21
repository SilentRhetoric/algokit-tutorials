import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getAssetTransfer(id: string) {
  const axfer = await algorand.client.indexer.lookupTransactionByID(id).do();
  return axfer;
}
