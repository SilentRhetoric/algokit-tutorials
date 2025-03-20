---
type: lesson
title: Transaction Blocks
focus: /src/utils.ts
---

# Transaction Blocks

In the previous lesson, we fetched the network status and looked at the `lastRound` property to get the block number of the tip of the chain. Now, let's see what's in the most recent block on the chain in terms of transactions.

Blocks are the primary unit of blockchains, containing transactions that affect account balances and other data on the distributed ledger. They are cryptographically linked to the block which came before them to protect previous chain data from being tampered with.

Algorand blocks also contain information about the account that proposed it, reward payout, the timestamp, information about protocol upgrade status, and more.

## Task: Inspect a Block

Use the `AlgorandClient` to fetch a block from the tip of the chain:

```ts add={2,3}
export async function getBlock(round: bigint) {
  const block = await algorand.client.algod.block(round).do();
  return block;
}
```

Fix the code at right so that clicking the button will fetch the latest block on Algorand MainNet. It will be visualized as an interactive tree.

What do you notice about the block's contents? Is there anything that surprised you? Were you able to read all of the data?

## Further Reading

Learn more about Algorand blocks and the data they contain [here](http://dev.algorand.co/concepts/transactions/blocks).
