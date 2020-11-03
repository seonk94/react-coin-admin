import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../provider/UserProvider';
import { auth, googleProvider } from '../../utils/firebase';
import { AuthContainer, AuthSection } from './css';

function SignIn() {
	const history = useHistory();
	const userContext = useContext(UserContext);

	const handlerGoogleSignIn = () => {
		auth
			.signInWithPopup(googleProvider)
			.then((res) => {
				if (userContext.setUser) {
					userContext.setUser(res.user);
					history.push({
						pathname: '/',
					});
				}
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
