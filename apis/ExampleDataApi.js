import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const propertiesGetExampleGET = Constants =>
  fetch(`https://example-data.draftbit.com/properties/`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const usePropertiesGetExampleGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['cacheExampleGet', args], () =>
    propertiesGetExampleGET(Constants, args)
  );
};

export const FetchPropertiesGetExampleGET = ({
  children,
  onData = () => {},
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = usePropertiesGetExampleGET();

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const propertiesPostExamplePOST = Constants =>
  fetch(`https://example-data.draftbit.com/properties/`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const usePropertiesPostExamplePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => propertiesPostExamplePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('cacheExamplePost', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('cacheExamplePost');
      },
    }
  );
};
