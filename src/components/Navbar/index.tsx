import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Spacer } from '../../style/globalStyle';
import { NavHeader } from './css';

function Navbar() {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };
  return (
    <NavHeader>
      <Spacer />
      <Button onClick={handleLogin}
        primary>
				Login
      </Button>
    </NavHeader>
  );
}

export default Navbar;
