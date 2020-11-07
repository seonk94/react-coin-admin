import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SignIn from '../template/auth/SignIn';
import MainTemplate from '../template/main';

function Root() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={MainTemplate} />
				<Route exact path="/login" component={SignIn} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}
export default Root;
