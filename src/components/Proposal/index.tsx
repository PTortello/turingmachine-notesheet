import { useState } from "react";
import { Container, Digit, MidDigit } from "./styles";

function Proposal() {
  const [digits, setDigits] = useState([0, 0, 0]);

  const getDigit = (index: number) => {
    const digit = digits[index] > 0 ? digits[index] : "";
    return digit;
  };

  const handleClick = (index: number) => {
    const newDigits = [...digits];
    newDigits[index] = digits[index] === 5 ? 1 : digits[index] + 1;
    setDigits(newDigits);
  };

  return (
    <Container>
      <Digit onClick={() => handleClick(0)}>{getDigit(0)}</Digit>
      <MidDigit onClick={() => handleClick(1)}>{getDigit(1)}</MidDigit>
      <Digit onClick={() => handleClick(2)}>{getDigit(2)}</Digit>
    </Container>
  );
}

export default Proposal;
