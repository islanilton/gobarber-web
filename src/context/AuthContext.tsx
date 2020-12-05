import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signin(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signin = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    console.log(response.data);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Islanilton', signin }}>
      {children}
    </AuthContext.Provider>
  );
};
