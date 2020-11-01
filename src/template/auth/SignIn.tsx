import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth, googleProvider } from '../../utils/firebase';
import { AuthContainer, AuthSection } from './css';

function SignIn() {
	const history = useHistory();
	const handlerGoogleSignIn = () => {
		auth
			.signInWithPopup(googleProvider)
			.then(() => {
				history.push({
					pathname: '/',
				});
			})
			.catch((error) => {
				throw Error(error.message);
			});
	};
	return (
		<AuthContainer>
			<AuthSection>
				<button onClick={handlerGoogleSignIn} type="button">
					Google Login
				</button>
			</AuthSection>
		</AuthContainer>
	);
}

export default SignIn;
