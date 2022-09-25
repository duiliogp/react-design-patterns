import {useState, useEffect} from 'react'
import axios from 'axios';

export const withUser = (Component, userId) => {
  return (props) => {


    

    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);
    return <Component {...props} user={user} />
  } 
}

