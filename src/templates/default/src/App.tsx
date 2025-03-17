import algokitLogo from "/logo.svg";
import DataFetcher from "./DisplayData";

function App() {
  return (
    <div className="flex flex-col items-center p-8 gap-8">
      <div>
        <a href="https://developer.algorand.co" target="_blank">
          <img src={algokitLogo} className="h-16" alt="AlgoKit logo" />
        </a>
      </div>
      <p className="">Use AlgoKit Utils TypeScript to explore chain concepts</p>
      <DataFetcher />
    </div>
  );
}

export default App;
