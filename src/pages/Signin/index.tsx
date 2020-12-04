import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import * as SignInStyle from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: any) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <SignInStyle.Container>
      <SignInStyle.Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a href="as">
          <FiLogIn />
          Criar conta
        </a>
      </SignInStyle.Content>
      <SignInStyle.Background />
    </SignInStyle.Container>
  );
};

export default SignIn;
