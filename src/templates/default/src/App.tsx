import algokitLogo from '/logo.svg'
import DataFetcher from './DisplayData'

function App() {
  return (
    <>
      <div>
        <a href="https://algorand.co/algokit" target="_blank">
          <img src={algokitLogo} alt="AlgoKit logo" />
        </a>
      </div>
      <p className="text-xl">Vite + React</p>
      <DataFetcher/>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click the AlgoKit logo to read our docs!
      </p>
    </>
  )
}

export default App
