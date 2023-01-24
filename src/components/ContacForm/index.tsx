import React, { useState } from "react";

import isEmailValid from "../../utils/isValidEmail";
import useErrors from "../../hooks/useErrors";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import { Form, ButtonContainer } from "./styles";

interface ContactFormProps {
  buttonLabel: string;
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError({ field: "name" });
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "Digite um e-mail válido" });
    } else {
      removeError({ field: "email" });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName({ field: "name" })}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName({ field: "name" }) ? true : false}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName({ field: "email" })}>
        <Input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName({ field: "email" }) ? true : false}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
