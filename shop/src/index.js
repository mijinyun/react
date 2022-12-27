import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import {QueryClient,QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  // </React.StrictMode>
);
