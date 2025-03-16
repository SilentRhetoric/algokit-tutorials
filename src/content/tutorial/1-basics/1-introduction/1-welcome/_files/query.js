import { AlgorandClient } from "@algorandfoundation/algokit-utils";

export async function setupQuery(element){
  console.log("setupQuery called");
  const algorand = new AlgorandClient().mainNet();

  const setStatus = async () => {
    console.log("setStatus called");
    const status = await algorand.client.algod.status().do()
    element.innerHTML = `Status is ${status.lastRound}`;
  };

  element.addEventListener('click', async () => await setStatus());
}