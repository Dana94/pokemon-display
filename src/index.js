import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import DataContextProvider from './context/data-context';

const client = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <DataContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
