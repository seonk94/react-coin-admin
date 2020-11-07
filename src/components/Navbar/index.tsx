import React from 'react';
import { useHistory } from 'react-router-dom';
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
			<button type="button" onClick={handleLogin}>
				login
			</button>
		</NavHeader>
	);
}

export default Navbar;
