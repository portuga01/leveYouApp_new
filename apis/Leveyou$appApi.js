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

export const authUserPOST = (
  Constants,
  { code, continueAuthorization, phone }
) =>
  fetch(`https://leveyou.herokuapp.com/br/auth`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization:
        'Basic Vm5wR2MxRnRSbnBoVjAxblYxWmtOVjAxblYxWmtOR0ZHY0VoVmJrSnBZ',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: phone,
      code: code,
      continueAuthorization: continueAuthorization,
    }),
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useAuthUserPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => authUserPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('verifyNumber', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('verifyNumber');
      },
    }
  );
};

export const getTermsGET = Constants =>
  fetch(`https://leveyou.herokuapp.com/br/terms`, {
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

export const useGetTermsGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['term', args], () => getTermsGET(Constants, args));
};

export const FetchGetTermsGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useGetTermsGET();

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

export const loaderAppGET = Constants =>
  fetch(`https://leveyou.herokuapp.com/br/loaderapp/?postalCode=49400000`, {
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
  return useQuery(['loaderapps', args], () => loaderAppGET(Constants, args));
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
