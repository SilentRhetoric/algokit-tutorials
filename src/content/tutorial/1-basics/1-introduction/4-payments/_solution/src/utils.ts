import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getTransactionFromIndexer(txID: string) {
  const txn = await algorand.client.indexer.lookupTransactionByID(txID).do();
  return txn;
}
