import { useState } from "react";
import { t } from "utils/translate";
import Proposal from "components/Proposal";
import Verifier from "components/Verifier";
import { Button, Container, Content } from "./styles";

function Rounds() {
  const [rounds, setRounds] = useState([0]);

  const handleClick = () => {
    const newRounds = [...rounds];
    newRounds.push(rounds[rounds.length - 1] + 1);
    setRounds(newRounds);
  };

  return (
    <Container>
      {rounds.map((round) => (
        <Content key={round}>
          <Proposal />
          <Verifier />
        </Content>
      ))}
      <Button onClick={() => handleClick()}>{t("ADD_ROUND")}</Button>
    </Container>
  );
}

export default Rounds;
