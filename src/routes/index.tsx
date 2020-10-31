import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

function Root() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}
export default Root;
