import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { NavbarHeight } from './constants';

const BodyContainer = styled.div`
	display: block;
	margin-top: ${NavbarHeight}px;
	min-height: calc(100vh - ${NavbarHeight}px);
	height: 100%;
`;

function App() {
	return (
		<div className="App">
			<Navbar />
			<BodyContainer />
		</div>
	);
}

export default App;
