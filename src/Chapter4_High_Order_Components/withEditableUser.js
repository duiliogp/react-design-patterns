import {useState, useEffect } from 'react'
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
  return props => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      
    });
  }
}
