import styled, { css } from "styled-components";

interface Props {
  danger?: boolean;
}

export default styled.button<Props>`
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #ffffff;
  border-radius: 4px;
  transition: background 0.3s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #cccccc;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};
      &:hover {
        background: ${theme.colors.danger.light};
      }
      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
