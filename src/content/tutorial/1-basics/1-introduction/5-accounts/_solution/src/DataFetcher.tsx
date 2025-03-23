import { useState } from "react";
import { JSONTreeView } from "./JSONTreeView";
import { getAccount } from "./utils";

const DataFetcher = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData(null);
    setError("");

    try {
      const addr = "2UEQTE5QDNXPI7M3TU44G6SYKLFWLPQO7EBZM7K7MHMQQMFI4QJPLHQFHM";
      const acct = await getAccount(addr);
      setData(acct);
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
        className="px-4 py-2 m-auto rounded-md border border-gray-300 bg-gray-50 text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Fetch Account Info
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
