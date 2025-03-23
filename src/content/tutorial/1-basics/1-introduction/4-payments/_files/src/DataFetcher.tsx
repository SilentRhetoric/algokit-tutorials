import { useState } from "react";
import { getTransactionFromIndexer } from "./utils";

const DataFetcher = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData(null);
    setError("");

    try {
      const txID = "7MK6WLKFBPC323ATSEKNEKUTQZ23TCCM75SJNSFAHEM65GYJ5ANQ";
      const txn = await getTransactionFromIndexer(txID);
      const note = txn.transaction.note;
      const message = new TextDecoder().decode(note);
      setData(message);
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
        Decode Transaction Note
      </button>
      <div className="flex overflow-scroll">
        {loading && <p>Loading data...</p>}
        {error && <p>{`Error: ${error}`}</p>}
        {data && <p>{data}</p>}
      </div>
    </div>
  );
};

export default DataFetcher;
