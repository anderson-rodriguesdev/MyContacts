import { Overlay, Container, Footer } from "./styles";

import Button from "../Button";

interface ModalProps {
  danger?: boolean;
}

export default function Modal({ danger }: ModalProps) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
