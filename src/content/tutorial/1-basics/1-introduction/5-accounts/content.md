---
type: lesson
title: Accounts
focus: /src/utils.ts
---

# Accounts

In the last lesson we explored the first transaction on Algorand, an Algo payment from account `I3345FUQQ2GRBHFZQPLYQQX5HJMMRZMABCHRLWV6RCJYC6OO4MOLEUBEGU` to `ALGORANDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIN5DNAU`. This second account has a curious address--a so-called "vanity address"--but that's just for looks.

Algorand accounts are the main objects that are stored on the ledger, but there are others, too. Accounts are special, though, because they represent entities that can transact, hold and create assets, and create and interact with smart contracts.

Accounts on Algorand also play a pivotal role in the network's Pure Proof of Stake (PPoS) consensus protocol. The Algo balance of accounts serves as the stake that votes to approve blocks to be added to the chain. A more in-depth discussion of Algorand's consensus protocol can be found <a href="http://dev.algorand.co/protocol/overview" target="_blank">here</a>.

## Task: Inspect an Account

Use the `AlgorandClient` to fetch an account from the ledger and see what data it is holding:

```ts add={2,3}
export async function getAccount(addr: string) {
  const acct = await algorand.account.getInformation(addr);
  return acct;
}
```

Fix the code at right so that clicking the button will fetch an important account from Algorand MainNet. It will be visualized as an interactive tree.

Do you know why this account is notable?

## Further Reading

Use Lora the explorer to investigate this account at <a href="https://lora.algokit.io/mainnet/account/2UEQTE5QDNXPI7M3TU44G6SYKLFWLPQO7EBZM7K7MHMQQMFI4QJPLHQFHM" target="_blank">lora.algokit.io/mainnet/account/2UEQ...</a>

You can learn more about how Algorand accounts work in the Developer Portal <a href="http://dev.algorand.co/concepts/accounts/overview" target="_blank">here</a>.
