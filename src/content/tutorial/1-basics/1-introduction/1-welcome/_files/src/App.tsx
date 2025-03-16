import algokitLogo from './assets/logo.svg'
import './App.css'
import DataFetcher from './DisplayData'

function App() {
  return (
    <>
      <div>
        <a href="https://algorand.co/algokit" target="_blank">
          <img src={algokitLogo} className="logo" alt="AlgoKit logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <DataFetcher/>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click the AlgoKit logo to read our docs
      </p>
    </>
  )
}

export default App
