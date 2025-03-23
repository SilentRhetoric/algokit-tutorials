import { useState } from "react";
import { getBlock, getLastRound } from "./utils";
import { JSONTreeView } from "./JSONTreeView";

const DataFetcher = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData(null);
    setError("");

    try {
      const lastRound = await getLastRound();
      const block = await getBlock(lastRound);
      setData(block);
    } catch (err) {
      console.error(`Error fetching data: `, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md flex flex-col gap-8">
      <button
        onClick={handleFetchData}
        disabled={loading}
        className="px-4 py-2 m-auto rounded-md border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Fetch Latest Round
      </button>
      <div className="flex overflow-scroll">
        {loading && <p>Loading data...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <JSONTreeView data={data} />}
      </div>
    </div>
  );
};

export default DataFetcher;
