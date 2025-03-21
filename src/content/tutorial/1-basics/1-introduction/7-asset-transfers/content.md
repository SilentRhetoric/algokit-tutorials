---
type: lesson
title: Asset Transfers
focus: /src/utils.ts
---

# Asset Transfers

Algorand Standard Assets (ASA) are powerful because they are easy to create and also because they enable asset movements to be performed as simple asset transfer transactions.

ASA balances are recorded on the main account ledger of the chain rather than being represented as state inside of a smart contract that represents the token, as with assets on many other blockchains.

This means that it is easy for developers _and users_ to see and understand their asset balances and manage asset transfers. With ASAs, there's no risk that a smart contract token could have malicious code embedded in it that could drain your account.

Asset transfers on Algorand are nearly identical to payment transactions except that the Asset ID is specified and the recipient has opted in to receive that ASA.

This is another unique feature on Algorand that provides users the benefit of choosing what assets can be sent to them and avoiding unwanted tokens in their account.

## Task: Inspect an Asset Transfer

Use the `AlgorandClient` to fetch a significant asset transfer transaction from the indexer and see its properties:

```ts add={2,3}
export async function getAssetTransfer(id: string) {
  const axfer = await algorand.client.indexer.lookupTransactionByID(id).do();
  return axfer;
}
```

Fix the code at right so that clicking the button will fetch the transaction details from Algorand MainNet. It will be visualized as an interactive tree.

How much did it cost to send this eight-figure value transfer as an asset transfer on Algorand?

## Further Reading

You can learn more about how Algorand Standard Asset transfers work [here](http://dev.algorand.co/concepts/transactions/types#asset-transfer-transaction).
