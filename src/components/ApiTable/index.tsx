import React from 'react';
import { Table } from 'semantic-ui-react';
import { IApi } from '../../types';
import IndicatorSelector from './IndicatorSelector';

interface Props {
	apiList: IApi[];
}

function ApiTable({ apiList }: Props) {
	return (
		<Table celled striped>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Apikey</Table.HeaderCell>
					<Table.HeaderCell>Secret</Table.HeaderCell>
					<Table.HeaderCell>Indicator</Table.HeaderCell>
					<Table.HeaderCell>Market</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{apiList.map((api) => (
					<Table.Row>
						<Table.Cell>{api.apiKey}</Table.Cell>
						<Table.Cell>{api.secret}</Table.Cell>
						<Table.Cell>
							<IndicatorSelector />
						</Table.Cell>
						<Table.Cell>{api.market}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
}

export default ApiTable;
