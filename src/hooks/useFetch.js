import { useEffect, useState } from "react";

//custom hook to fetch data from a provided URI inside container called baseURI in app.jsx

export const useFetch = (url) => {
  const [data, setData] = useState(null); // state to store the fetched data, initially null

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect hook to perform side effect (data fetching in this case)
  useEffect(() => {
    const getData = async () => {
      //Async function to fetch data
      const response = await fetch(url); // fetch data from the provided URI
      const jData = await response.json(); // parse response JSON data and keep inside jData
      setData(jData.tasks ? jData.tasks : jData.task);
      //Update the [data] state that was formally null with setData... updating data with fetched data
      setLoading(false);
      console.log(jData);
    };

    setTimeout(async () => {
      try {
        await getData();
      } catch (error) {
        console.log(error);
        setError("Oops somthing went wrong");
        setLoading(false);
      }
    }, 3000);
  }, []);

  // return { data, setData, error };
  return { data, setData, loading, error }; // return an object containing data
};
