import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { MainTemplateContainer } from './css';
import { RootState } from '../../reducers';
import ApiTable from '../../components/ApiTable';

function MainTemplate() {
  const apis = useSelector((state: RootState) => state.api.apis);

  return (
    <MainTemplateContainer>
      <Grid container>
        <Grid.Row>
          <ApiTable apiList={apis} />
        </Grid.Row>
      </Grid>
    </MainTemplateContainer>
  );
}

export default MainTemplate;
