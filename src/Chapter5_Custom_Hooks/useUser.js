import { useState, useEffect } from 'react';
import axios from 'axios';


export const useUser = userId => {

  axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
 
  const [user, setUser] = useState(null);

 useEffect(() => {
   (async() => {
    const response = await axios.get(`/users/${userId}`);
    setUser(response.data);
   })();
   
 }, [userId])

 return user;
 
};


// this basic means:
// const currentUser = setCurrentUser(22);