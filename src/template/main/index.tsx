import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { MainTemplateContainer } from './css';
import { RootState } from '../../reducers';
import ApiTable from '../../components/ApiTable';

function MainTemplate() {
	const apis = useSelector((state: RootState) => state.api.apis);
	// const dispatch = useDispatch();

	return (
		<MainTemplateContainer>
			<Grid container>
				<Grid.Row>
					<Grid.Column mobile={16}>
						<ApiTable apiList={apis} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</MainTemplateContainer>
	);
}

export default MainTemplate;
