import { ButtonStyle } from "./styles";

import Spinner from "../Spinner";

import ButtonProps from "../../types/button";

export default function Button({
  type,
  disabled,
  isLoading,
  children,
}: ButtonProps) {
  return (
    <ButtonStyle type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </ButtonStyle>
  );
}
