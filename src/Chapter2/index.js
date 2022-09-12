import axios from 'axios'
import styled from 'styled-components'

import {CurrentUserLoader} from './CurrentUserLoader'
import {UserInfo} from './UserInfo'
import {ProductInfo} from './ProductInfo'

import {UserLoader} from './UserLoader'
import {ResourceLoader} from './ResourceLoader'
import {DataLoader} from './DataSource'

const getServerData = url => async() => {
  axios.defaults.baseURL = 'http://localhost:8080';
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>

const H2 = styled.h2`
  background-color:#eee;
  font-size:20px;
`;

export const Chapter2 = () => {
  return <>
    <H2>Local Storage</H2>
    <DataLoader getDataFunc={getLocalStorageData('message')} resourceName="message">
          <Text />
    </DataLoader>


    <H2>Data Loader</H2>
    <DataLoader getDataFunc={getServerData('/users/1')} resourceName="user">
          <UserInfo />
    </DataLoader>

    <DataLoader getDataFunc={getServerData('/products/2')} resourceName="product">
          <ProductInfo />
    </DataLoader>
    
    <H2>Resource Loader</H2>
    <p></p>
    <ResourceLoader resourceUrl="/users/3" resourceName="user">
      <UserInfo  />
    </ResourceLoader>

    <ResourceLoader resourceUrl="/products/3" resourceName="product">
      <ProductInfo  />
    </ResourceLoader>  

    <H2>User Loader</H2>
    <UserLoader userId={2}>
     <UserInfo  />
   </UserLoader>

   <H2>Current User Loader</H2>
   <p>Load data in route /current-user</p>
    <CurrentUserLoader>
     <UserInfo  />
   </CurrentUserLoader>

  </>

}