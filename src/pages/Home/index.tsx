import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import Modal from "../../components/Modal";

export default function Home() {
  return (
    <Container>
      <Modal></Modal>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ícone de seta" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>email@email.com</span>
            <span>+55 (41)99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Ícone de edição" />
            </Link>
            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
