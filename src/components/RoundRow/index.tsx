import Proposal from "components/Proposal";
import Verifier from "components/Verifier";
import { Container } from "./styles";

function RoundRow() {
  return (
    <Container>
      <Proposal />
      <Verifier />
    </Container>
  );
}

export default RoundRow;
