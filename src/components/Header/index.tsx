import Deduce from "components/Deduce";
import { Button, Container, Content } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <Button>Reset</Button>
      </Content>
      <Deduce />
    </Container>
  );
}

export default Header;
