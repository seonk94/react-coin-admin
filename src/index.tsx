import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UserProvider from './provider/UserProvider';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/globalStyle';
import configureStore from './store/configureStore';
import Root from './routes';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <UserProvider>
        <Root />
      </UserProvider>
      <GlobalStyle />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
