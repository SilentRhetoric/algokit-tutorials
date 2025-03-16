import { useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setData(null);
    setError("");
    
    try {
      const response = await fetch('https://mainnet-api.4160.nodely.dev/v2/status');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(`Error fetching data: `, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <button
        onClick={handleFetchData}
        disabled={loading}
        className="btn"
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      
      <div className="">
        {loading && <p className="">Loading data...</p>}
        
        {error && (
          <div className="">
            <p>{error}</p>
          </div>
        )}
        
        {data && (
          <div className="">
            <h3 className="">Response Data:</h3>
            <pre className="">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;