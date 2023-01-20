import { ReactElement } from "react";
import { Container } from "./styles";

interface FormGroupProps {
  children: ReactElement;
  error?: string;
}

export default function FormGroup({ children, error }: FormGroupProps) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
