import React, { ButtonHTMLAttributes } from 'react';

import * as ButtonStyles from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonStyles.Container type="button" {...rest}>
    {children}
  </ButtonStyles.Container>
);

export default Button;
