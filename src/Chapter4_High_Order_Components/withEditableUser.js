import { useState, useEffect } from 'react'
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
  return props => {

    //This is gonna represent data that we have on the server side.
    //in case we make changes to the data on the client side.
    const [originalUser, setOriginalUser] = useState(null);

    //This is gonna be tue current data on the client side.
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = changes => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post( `/users/${userId}`, { user } );
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };


    return <Component {...props}
      user={user}
      onChangeUser={onChangeUser}
      onSaveUser={onSaveUser}
      onResetUser={onResetUser}
      
      />

  }
}
