import styled from 'styled-components';

const TableContainer = styled.div`
	max-width: 1000px;
	margin: auto;
`;

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;

	thead {
		border: 1px solid #ddd;
	}

	tbody {
		border: 1px solid #ddd;
	}
`;

const Tr = styled.th`
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	padding: 12px;
`;

const Td = styled.td`
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	padding: 12px;
`;

const TdImage = styled(Td)`
	text-align: center;
	img {
		width: 32px;
		height: 32px;
	}
`;

const TdIcons = styled(Td)`
	text-align: center;
`;

export { Table, TableContainer, Tr, Td, TdImage, TdIcons };
