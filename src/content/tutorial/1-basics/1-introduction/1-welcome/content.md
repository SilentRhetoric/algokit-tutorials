---
type: lesson
title: Welcome to Algorand
focus: /src/App.tsx
---

# Welcome

Hey there, and welcome to Algorand 👋!

This is a self-guided tutorial that will introduce you to some of the basic building blocks of blockchain and how they work on the Algorand blockchain network.

At each step along the way, you'll read a short explanation of an Algorand primitive concept and explore it using code to interact with real examples taken straight from the MainNet public network. 

After reading the instructions, use the editor at top right to complete the code to perform the task and see the result displayed in the small app rendered at bottom right.

If you get stuck trying to get the code right, you can use the Solve button to show the correct code to run the app and complete the exploration.

Throughout the tutorial, you will use the AlgoKit Utils TypeScript library to interact with the Algorand network and its data structures. 

This `algokit-utils-ts` package is one of the central code tools within AlgoKit, a comprehensive set of software tools for Algorand developers to build applications that can leverage Algorand's incredible capabilities as a distributed ledger.

The primary class provided by Utils is the `AlgorandClient`, a stateful client that acts as a portal to a rich set of account, transaction, and data methods.

```ts add={9}
export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => setCounter(counter + 1));

  setCounter(0);
}
```

Enjoy the journey!
