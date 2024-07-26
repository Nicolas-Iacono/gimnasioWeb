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

export const postFetch = (endpoint, payload) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(endpoint,payload)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
  return promise
}
