import { useState } from "react";
import { Container, Field } from "./styles";

function Verifier() {
  const [verifications, setVerifications] = useState(["", "", "", "", "", ""]);

  const handleClick = (index: number) => {
    const newVerifications = [...verifications];
    let newString = "";
    switch (verifications[index]) {
      case "":
        newString = "close";
        break;
      case "close":
        newString = "check";
        break;
      default:
        break;
    }
    newVerifications[index] = newString;
    setVerifications(newVerifications);
  };

  return (
    <Container>
      {verifications.map((verification, index) => (
        <Field
          key={index}
          className="material-symbols-outlined"
          onClick={() => handleClick(index)}
        >
          {verification}
        </Field>
      ))}
    </Container>
  );
}

export default Verifier;
