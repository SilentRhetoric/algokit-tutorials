import algokitLogo from '/logo.svg'
import DataFetcher from './DisplayData'

function App() {
  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <div>
        <a href="https://developer.algorand.co" target="_blank">
          <img src={algokitLogo} className="h-16" alt="AlgoKit logo" />
        </a>
      </div>
      <p className="text-4xl">AlgoKit Tutorial</p>
      <p className="text-sm">
        Click the AlgoKit logo to read our docs
      </p>
      <DataFetcher/>
    </div>
  )
}

export default App
