import Letters from "components/Letters";
import Shapes from "components/Shapes";
import { Container } from "./styles";

function Labels() {
  return (
    <Container>
      <Shapes horizontal />
      <Letters />
    </Container>
  );
}

export default Labels;
