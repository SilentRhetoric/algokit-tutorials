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
        className="btn m-auto"
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
