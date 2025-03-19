import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getBlockFromIndexer(round: bigint) {
  const block = await algorand.client.indexer.lookupBlock(round).do();
  return block;
}
