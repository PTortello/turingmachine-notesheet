import { useState } from "react";
import { Container, Digit, MidDigit } from "./styles";

function RoundRow() {
  const [digits, setDigits] = useState([1, 2, 3]);

  const handleClick = (index: number) => {
    const newDigits = [...digits];
    newDigits[index] = digits[index] === 5 ? 1 : digits[index] + 1;
    setDigits(newDigits);
  };

  return (
    <Container>
      <Digit onClick={() => handleClick(0)}>{digits[0]}</Digit>
      <MidDigit onClick={() => handleClick(1)}>{digits[1]}</MidDigit>
      <Digit onClick={() => handleClick(2)}>{digits[2]}</Digit>
    </Container>
  );
}

export default RoundRow;
