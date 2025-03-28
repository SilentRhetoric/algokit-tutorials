/*
This file is set up for the Welcome lesson.
It gets overridden by the _files folder in each individual lesson,
so there is no need to modify this file for subsequent lessons.
*/

import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getLastRound() {
  const status = await algorand.client.algod.status().do();
  return status.lastRound;
}

export async function getBlock(round: bigint) {
  const block = await algorand.client.algod.block(round).do();
  return block;
}
