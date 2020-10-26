import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {
    if(error){
      console.log(error);
    }
    if (loading){ 
     // console.log('loading!!!!!');
    }else{
      //console.log(data.repositories);
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);
 
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;