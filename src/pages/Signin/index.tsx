import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as SignInStyle from './styles';

const SignIn: React.FC = () => (
  <SignInStyle.Container>
    <SignInStyle.Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="as">
        <FiLogIn />
        Criar conta
      </a>
    </SignInStyle.Content>
    <SignInStyle.Background />
  </SignInStyle.Container>
);

export default SignIn;
