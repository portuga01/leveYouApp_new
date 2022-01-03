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

export const loaderAppGET = Constants =>
  fetch(`https://leveyou.app/br/loaderapp/?postalCode=49400000`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Basic Vm5wR2MxRnRSbnBoVjAxblYxWmtOVjAxblYxWmtOR0ZHY0VoVmJrSnBZ',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useLoaderAppGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery('loaderapp', () => loaderAppGET(Constants, args));
};

export const FetchLoaderAppGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useLoaderAppGET();

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
