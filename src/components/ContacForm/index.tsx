import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

interface ContactFormProps {
  buttonLabel: string;
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
