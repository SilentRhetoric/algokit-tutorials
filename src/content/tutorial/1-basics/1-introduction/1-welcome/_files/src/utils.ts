import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getLastRound() {
  const status = await algorand.client.algod.status().do();
  return status; // Insert code here
}
