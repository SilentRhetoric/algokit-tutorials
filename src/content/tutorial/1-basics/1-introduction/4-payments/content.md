---
type: lesson
title: Payment Transactions
focus: /src/utils.ts
---

# Payment Transactions

The block from Lesson 3 contained just a single transaction, an Algo payment transaction. This is the simplest type of transaction on Algorand.

Below is an example of a simple payment transaction that sends Algos from one account to another. It also includes a text note, which is Base64 encoded.

```json
{
  "txn": {
    "amt": 5000000,
    "fee": 1000,
    "fv": 6000000,
    "gen": "mainnet-v1.0",
    "gh": "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
    "lv": 6001000,
    "note": "SGVsbG8gV29ybGQ=",
    "rcv": "GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A",
    "snd": "EW64GC6F24M7NDSC5R3ES4YUVE3ZXXNMARJHDCCCLIHZU6TBEOC7XRSBG4",
    "type": "pay"
  }
}
```

A full reference for transaction fields, their full names, types, and descriptions can be found [here](http://localhost:4322/concepts/transactions/transactions).

## Task: Inspect a Payment Transaction

Use the `AlgorandClient` to fetch an Algo payment transaction from the chain:

```ts add={2,3}
export async function getTransactionFromIndexer(txID: string) {
  const txn = await algorand.client.indexer.lookupTransactionByID(txID).do();
  return txn;
}
```

Fix the code at right so that clicking the button will fetch the special transaction in the historical block from Lesson 3 and decode its note field.

What do you notice about this transaction note?
