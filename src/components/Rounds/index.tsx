import { useState } from "react";
import RoundRow from "components/RoundRow";
import { Button, Container } from "./styles";

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
        <RoundRow key={round} />
      ))}
      <Button onClick={() => handleClick()}>Add round</Button>
    </Container>
  );
}

export default Rounds;
