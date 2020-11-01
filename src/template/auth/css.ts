import styled from 'styled-components';

const AuthContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	min-height: calc(100vh - 49px);
	&:after,
	&:before {
		min-height: 1px;
		content: '';
		box-flex: 1;
		height: 24px;
		flex-grow: 1;
	}
`;

const AuthSection = styled.section`
	display: block;
	margin: 0 auto;
	padding: 32px;
	border: 1px solid #bbb;
	background: #ddd;
	border-radius: 4px;
`;

export { AuthContainer, AuthSection };
