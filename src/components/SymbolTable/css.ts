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
		th {
			border: 1px solid #ddd;
			padding: 12px;
		}
	}

	tbody {
		border: 1px solid #ddd;
		td {
			border: 1px solid #ddd;
			padding: 12px;
		}
	}
`;

export { Table, TableContainer };
