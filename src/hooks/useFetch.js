import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers(url);
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
