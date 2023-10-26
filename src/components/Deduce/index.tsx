import Numbers from "components/Numbers";
import Shapes from "components/Shapes";
import { Container, Content } from "./styles";

function Deduce() {
  return (
    <Container>
      <Shapes />
      <Content>
        <Numbers />
        <Numbers />
        <Numbers />
      </Content>
    </Container>
  );
}

export default Deduce;
