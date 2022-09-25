
// import {useCurrentUser} from './useCurrentUser';
// import { useUser } from './useUser';
// import { useResource } from './useResource';
import { useDataSource } from './useDataSource';
import axios from 'axios'



const serverResource = resourceUrl => async () => {
  axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
  const response = await axios.get(resourceUrl);
  return response.data;
}

const localStorageResource = key => () => {
  return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
  // const user = useCurrentUser();
  // const user = useUser(userId);
  // const user = useResource(`/users/${userId}`);
  const user = useDataSource(serverResource(`/users/${userId}`));
  const msg = useDataSource(localStorageResource('message'));
  
  // const user = useDataSource(async () => {
  //   const response = await axios.get((`/users/${userId}`));
  //   return response.data;
  // });

  const { name, age, hairColor, hobbies } = user || {};

  return user ?

    (
      <>
        Message: {msg}
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair color: {hairColor}</p>
        <h4>Hobbies</h4>
        <ul>
          {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
      </>
    ) : <p>Loading...</p>;

}