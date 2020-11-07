import styled from 'styled-components';
import { NavbarHeight } from '../../constants';

const NavHeader = styled.header`
	z-index: 4;
	background-color: #fff;
	border: 0 solid #ddd;
	border-bottom-width: 1px;
	height: ${NavbarHeight - 1}px;
	width: 100%;
	display: flex;
	align-items: center;
`;

export { NavHeader };
