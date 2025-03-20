---
type: lesson
title: Assets
focus: /src/utils.ts
---

# Algorand Standard Assets

In the last lesson we grabbed the account information from the ledger for a notable account, the account used by Circle to create one of the most important assets on the Algorand network, the stablecoin USDC.

On Algorand, it is possible to create assets, which we call Algorand Standard Assets or ASAs for short, without needing to get involve with smart contracts, as is required on many blockchains. This is because ASAs are a built-in feature of Algorand's protocol.

Using ASAs to tokenize assets by setting just a few data fields is an incredibly powerful capability which makes digital assets both more accessible and more secure for people who want to leverage blockchain to solve real-world problems.

## Task: Inspect an Asset

Use the `AlgorandClient` to fetch an asset from the ledger and see its properties:

```ts add={2,3}
export async function getAsset(id: bigint) {
  const asset = await algorand.asset.getById(id);
  return asset;
}
```

Fix the code at right so that clicking the button will fetch the ASA details from Algorand MainNet. It will be visualized as an interactive tree.

Do you notice anything interesting about how this asset is configured?

## Further Reading

You can learn more about how Algorand Standard Assets work [here](http://dev.algorand.co/concepts/assets/overview).
