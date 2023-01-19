import { Container } from './style';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width="201" />
    </Container>
  );
}
