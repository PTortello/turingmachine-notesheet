import { useState } from "react";
import { INITIAL_DIGITS } from "constants/initialValues";
import { Container, Slash, Text } from "./styles";

function Numbers() {
  const [digits, setDigits] = useState(INITIAL_DIGITS);

  const handleClick = (index: number) => {
    const newDigits = [...digits];
    newDigits[index] = !digits[index];
    setDigits(newDigits);
  };

  return (
    <Container>
      {digits.map((digit, index) => (
        <Text key={index} onClick={() => handleClick(index)}>
          {digit && <Slash>/</Slash>}
          {index + 1}
        </Text>
      ))}
    </Container>
  );
}

export default Numbers;
