---
type: lesson
title: Smart Contracts
focus: /src/utils.ts
---

# Smart Contracts

Smart contracts are used for many, many purposes on Algorand, even though they are not necessary to create tokens. The Algorand Virtual Machine (AVM) and its Transaction Execution Approval Language programming language, known as TEAL, provide developers with the ability to craft multiple types of smart contracts.

Smart contracts can approve or send transactions, check chain state in many ways, store data in various places, enforce that transaction groups meet strict requirements, emit events, and much more.

Smart contracts can get complicated quickly, so here we'll just peek at a very simple "Hello World" example.

Algorand provides both Python and TypeScript as languages for writing smart contracts, and AlgoKit helps take care of compilation, debugging, deployment, and more.

Here's what a Hello World smart contract application looks like in Algorand TypeScript:

```ts
import { Contract } from "@algorandfoundation/algorand-typescript";

export class HelloWorld extends Contract {
  hello(name: string): string {
    return `Hello, ${name}`;
  }
}
```

## Task: Inspect an Smart Contract

Use the `AlgorandClient` to fetch a significant asset transfer transaction from the indexer and see its properties:

```ts add={2,3}
export async function getAppInfo(id: bigint) {
  const app = await algorand.app.getById(id);
  return app;
}
```

Fix the code at right so that clicking the button will fetch the app details from Algorand MainNet. It will be visualized as an interactive tree.

Does the smart contract resemble the code above? What properties does this smart contract have on the ledger?

## Further Reading

Use Lora the explorer to investigate this asset transfer at <a href="https://lora.algokit.io/mainnet/application/2853581955" target="_blank">lora.algokit.io/mainnet/application/2853581955</a>.

You can learn more about how Algorand smart contracts work in the Developer Portal <a href="http://dev.algorand.co/concepts/smart-contracts/overview" target="_blank">here</a>.
