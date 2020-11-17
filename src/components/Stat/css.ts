import styled from 'styled-components';

const StatCard = styled.div`
	position: relative;
	padding: 12px;
	border: 1px solid #ddd;
	border-radius: 4px;
`;

const StatTitle = styled.dt`
	overflow-wrap: break-word;
	font-weight: 500;
	font-size: 0.875rem;
`;
const StatData = styled.dd`
	vertical-align: baseline;
	font-variant-numeric: proportional-nums;
	margin: 0px;
	padding: 4px 0px;
	font-size: 1.5rem;
	font-weight: 600;
`;
const StatHelp = styled.p`
	opacity: 0.8;
	margin: 0px;
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
	min-height: 17px;
`;

export { StatCard, StatTitle, StatData, StatHelp };
