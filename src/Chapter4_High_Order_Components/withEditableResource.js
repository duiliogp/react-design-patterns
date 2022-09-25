import { useState, useEffect } from 'react'
import axios from 'axios';


const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


export const withEditableResource = (Component, resourceServerPath, resourceName) => {
  return props => {

    //This is gonna represent data that we have on the server side.
    //in case we make changes to the data on the client side.
    const [originalData, setOriginalData] = useState(null);

    //This is gonna be tue current data on the client side.
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
        const response = await axios.get(resourceServerPath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = changes => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourceServerPath, { [resourceName]:data } );
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]:onChange,
      [`onSave${capitalize(resourceName)}`]:onSave,
      [`onReset${capitalize(resourceName)}`]:onReset,
      
    };

    return <Component {...props} {...resourceProps} />

  }
}
