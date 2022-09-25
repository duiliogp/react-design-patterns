import { useState, useEffect } from 'react';

export const useDataSource = getResourceFunc => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();

  // }, [getResourceFunc]) //loop infinito ao executar
  }, [getResourceFunc])

  return resource;

};


// this basic means:
// const resource = useResource('URL');