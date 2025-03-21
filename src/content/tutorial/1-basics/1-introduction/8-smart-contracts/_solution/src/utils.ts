import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getAppInfo(id: bigint) {
  const app = await algorand.app.getById(id);
  return app;
}
