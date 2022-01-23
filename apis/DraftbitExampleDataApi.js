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

export const newEndpointGET = Constants =>
  fetch(`https://example-data.draftbit.com/authors?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useNewEndpointGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/authors?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchNewEndpointGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/authors?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

export const gETCryptoPrices782GET = Constants =>
  fetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGETCryptoPrices782GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGETCryptoPrices782GET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/crypto?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

export const gET10MostRecentArticles17421GET = Constants =>
  fetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGET10MostRecentArticles17421GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGET10MostRecentArticles17421GET = ({
  children,
  onData = () => {},
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

export const gETArticleByID17428GET = (Constants, { id }) =>
  fetch(`https://example-data.draftbit.com/articles/${id || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGETArticleByID17428GET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/articles/${id || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGETArticleByID17428GET = ({
  children,
  onData = () => {},
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/articles/${id || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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

export const gET10MostRecentArticles17422GET = Constants =>
  fetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useGET10MostRecentArticles17422GET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });
};

export const FetchGET10MostRecentArticles17422GET = ({
  children,
  onData = () => {},
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://example-data.draftbit.com/articles?_limit=10`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    depends: [isFocused],
  });

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
