import { useState } from "react";
import { Container, Slash, Text } from "./styles";

function Numbers() {
  const [digits, setDigits] = useState([false, false, false, false, false]);

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
