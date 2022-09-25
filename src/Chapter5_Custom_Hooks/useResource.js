import { useState, useEffect } from 'react';
import axios from 'axios';


export const useResource = resourceUrl => {

  axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
 
  const [resource, setResource] = useState(null);

 useEffect(() => {
   (async() => {
    const response = await axios.get(resourceUrl);
    setResource(response.data);
   })();
   
 }, [resourceUrl])

 return resource;
 
};


// this basic means:
// const resource = useResource('URL');