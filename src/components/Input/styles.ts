import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ConatinerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ConatinerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

    

  & + div {
    margin-top: 8px;
  }

  display: flex;
  align-items: center;
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin: 0;
  padding: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
