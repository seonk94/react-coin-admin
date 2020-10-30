import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const BodyContainer = styled.div`
	display: block;
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
