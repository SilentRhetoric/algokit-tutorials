import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getAccount(addr: string) {
  const acct = await algorand.account.getInformation(addr);
  return acct;
}
