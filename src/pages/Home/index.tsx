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
import { useEffect, useState } from "react";
import { Contact } from "../../types/contacts";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? " Contato" : " Contatos"}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ícone de seta" />
          </button>
        </header>

        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                  <small>{contact.category_name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Ícone de edição" />
              </Link>
              <button type="button">
                <img src={trash} alt="Ícone de lixeira" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
