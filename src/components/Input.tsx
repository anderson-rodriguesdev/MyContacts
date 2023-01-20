import styled, { css } from "styled-components";

interface Props {
  error?: boolean;
}

export default styled.input<Props>`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease-in;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main};
      &:focus {
        border-color: ${({ theme }) => theme.colors.danger.main};
      }
    `}
`;
