import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { BodyContainerPadding, NavbarHeight } from './constants';
import MainTemplate from './template/main';

const BodyContainer = styled.div`
	display: block;
	margin-top: ${NavbarHeight}px;
	min-height: calc(100vh - ${NavbarHeight + BodyContainerPadding * 2}px);
	height: 100%;
	padding: ${BodyContainerPadding}px;
`;

function App() {
	return (
		<div>
			<Navbar />
			<BodyContainer>
				<MainTemplate />
			</BodyContainer>
		</div>
	);
}

export default App;
