import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../template/auth/SignIn';
import MainTemplate from '../template/main';

function Root() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={MainTemplate} />
				<Route exact path="/login" component={SignIn} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}
export default Root;
