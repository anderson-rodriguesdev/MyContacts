import { ReactElement } from "react";
import { Container } from "./styles";

interface FormGroupProps {
  children: ReactElement;
}

export default function FormGroup({ children }: FormGroupProps) {
  return <Container>{children}</Container>;
}
