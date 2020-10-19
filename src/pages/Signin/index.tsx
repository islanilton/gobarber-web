import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import * as SignInStyle from './styles';

const SignIn: React.FC = () => (
  <SignInStyle.Container>
    <SignInStyle.Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

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
