import React, { useContext } from 'react';
import Root from './routes';
import 'semantic-ui-css/semantic.min.css';
import { UserContext } from './provider/UserProvider';

function App() {
  const userContext = useContext(UserContext);

  return <div>{userContext.loadingAuthState ? <h5>loading...</h5> : <Root />}</div>;
}

export default App;
