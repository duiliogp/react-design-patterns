
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      axios.defaults.baseURL = 'http://localhost:8080';
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);


  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );

}