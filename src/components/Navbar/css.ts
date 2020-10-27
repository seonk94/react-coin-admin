import styled from 'styled-components';
import { NavbarHeight } from '../../constants';

const NavHeader = styled.header`
	position: fixed;
	top: 0;
	z-index: 4;
	left: 0;
	right: 0;
	background-color: #fff;
	border: 0 solid #ddd;
	border-bottom-width: 1px;
	height: ${NavbarHeight - 1}px;
	width: 100%;
`;

export { NavHeader };
