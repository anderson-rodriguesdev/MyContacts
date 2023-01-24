import styled from "styled-components";

export default styled.select`
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
  appearance: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
