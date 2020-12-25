import React, { ReactChild, useEffect, useState } from 'react';
import firebase from '../utils/firebase';

type ContextProps = {
	user: firebase.User | null;
	authenticated: boolean;
	setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
	loadingAuthState: boolean;
};
export const UserContext = React.createContext<Partial<ContextProps>>({});

function UserProvider({ children }: { children: ReactChild }) {
  const [user, setUser] = useState(null as firebase.User | null);

  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((_user) => {
      setUser(_user);
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        authenticated : user !== null,
        setUser,
        loadingAuthState
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
