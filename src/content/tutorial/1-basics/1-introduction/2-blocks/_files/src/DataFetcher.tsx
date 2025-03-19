import { useState } from "react";
import { getBlock, getLastRound } from "./utils";
import { JSONTreeView } from "./JSONTreeView"; // @ts-ignore

const DataFetcher = () => {
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
        className="btn m-auto"
      >
        Fetch Latest Block
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
