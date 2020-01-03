import { useState, useEffect } from "react";
const axios = require("axios");

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function customFetch(url) {
    try {
      let response = await axios.get(url);
      console.log(response.data);
      let resData = response.data.map(item => {
        return item;
      });
      setData(resData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    customFetch(url);
  }, [url]);

  return [data, loading, error];
}

export default useCustomFetch;
