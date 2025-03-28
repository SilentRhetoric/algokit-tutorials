---
type: lesson
title: Welcome
focus: /src/utils.ts
---

# Welcome

Hey there, and welcome to Algorand 👋!

This is a self-guided tutorial that will introduce you to some of the basic building blocks of blockchain and how they work on the Algorand blockchain network.

Each lesson will include a short explanation of an Algorand concept and a task to explore it using code to interact with real examples from the MainNet public network.

After reading the instructions and reviewing the code preview, use the editor at top right to complete the code to perform the task. The app rendered at bottom right will update when you modify the code above.

If you get stuck trying to get the code right, you can use the Solve button to show the correct code to run the app and complete the exploration.

## AlgoKit Utils

Throughout the tutorial, you will use the AlgoKit Utils TypeScript library to interact with the Algorand network and its data.

This `algokit-utils` package is one of the central code tools within AlgoKit, a comprehensive toolkit for Algorand developers to build applications.

The primary class provided by Utils is the `AlgorandClient`, a stateful client that acts as a portal to a rich set of account, transaction, and data methods.

## Lora the Explorer

Each lesson in the tutorial will also invite you to use Lora, AlgoKit's Live On-Chain Resource Analyzer, to explore the objects of the lesson through it's sophisticated explorer pages and visualizations.

## Your First Task: Get the Latest Round

Let's create a client and use it to query MainNet for the latest round, or block number, at the tip of the chain:

```ts add=/.lastRound/
import { AlgorandClient } from "@algorandfoundation/algokit-utils";

const algorand = AlgorandClient.mainNet();

export async function getLastRound() {
  const status = await algorand.client.algod.status().do();
  return status.lastRound;
}
```

Here you can see that the AlgorandClient object has a method to access the `algod` client for making REST API calls to an Algorand node's Algod service to query current chain data.

Fix the code at right so that clicking the button will fetch the latest round number on Algorand MainNet!

## Further Reading

Use Lora the explorer to watch as blocks are added to Algorand Mainnet at <a href="https://lora.algokit.io/mainnet" target="_blank">lora.algokit.io</a>.

Learn more about AlgoKit Utils TypeScript and how to use it in your apps in the Developer Portal <a href="http://dev.algorand.co/algokit/utils/typescript/overview" target="_blank">here</a>.
