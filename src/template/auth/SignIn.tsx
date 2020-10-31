import React from 'react';
import { signInWithGoogle } from '../../utils/firebase';
import { AuthContainer, AuthSection } from './css';

function SignIn() {
	const handlerGoogleSignIn = () => {
		signInWithGoogle();
	};
	return (
		<AuthContainer>
			<AuthSection>
				google!!
				<button onClick={handlerGoogleSignIn} type="button">
					google button
				</button>
			</AuthSection>
		</AuthContainer>
	);
}

export default SignIn;
