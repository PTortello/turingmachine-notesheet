import Deduce from "components/Deduce";
import { Button, Container, Content } from "./styles";

interface HeaderProps {
  onOpen: () => void;
}

function Header({ onOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Button onClick={onOpen}>Notes</Button>
      </Content>
      <Deduce />
    </Container>
  );
}

export default Header;
