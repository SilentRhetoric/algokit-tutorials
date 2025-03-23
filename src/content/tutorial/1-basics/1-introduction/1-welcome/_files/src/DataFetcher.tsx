import { useState } from "react";
import { getLastRound } from "./utils";

const DataFetcher = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData("");
    setError("");

    try {
      const lastRound = await getLastRound();
      setData(lastRound.toString());
    } catch (err) {
      console.error(`Error fetching data: `, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col gap-8 text-center">
      <button
        onClick={handleFetchData}
        disabled={loading}
        className="px-4 py-2 m-auto rounded-md border border-gray-300 bg-gray-50 text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Fetch Latest Round
      </button>
      <div className="flex">
        {loading && <p>Loading data...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <div>{`Latest MainNet block: ${data}`}</div>}
      </div>
    </div>
  );
};

export default DataFetcher;
