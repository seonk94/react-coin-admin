import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { MainTemplateContainer } from './css';
import { RootState } from '../../reducers';
import ApiTable from '../../components/ApiTable';
import { UserContext } from '../../provider/UserProvider';
import { getApis } from '../../utils/firebase/ApiService';
import { FETCH_APIS } from '../../actions/api';

function MainTemplate() {
  const apis = useSelector((state: RootState) => state.api.apis);
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchApis = async () => {
      if (user) {
        const apis = await getApis(user.uid);
        dispatch({
          type : FETCH_APIS,
          payload : apis
        });
      }
    };
    fetchApis();
    return;
  }, []);
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
