import axios from 'axios'
import { useEffect, useState } from 'react'


export const useGetFetch = (url) =>{
  const [data, setData]= useState(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export const postFetch = async (endpoint, payload) => {
  try {
    const response = await axios.post(endpoint, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
