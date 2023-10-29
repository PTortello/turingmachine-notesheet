import { useState } from "react";
import VerifierIcon from "components/VerifierIcon";
import { stringSwitcher } from "utils/stringSwitcher";
import { Container, Field } from "./styles";

function Verifier() {
  const [verifications, setVerifications] = useState(["", "", "", "", "", ""]);

  const handleClick = (index: number) => {
    const newVerifications = [...verifications];
    newVerifications[index] = stringSwitcher(newVerifications[index]);
    setVerifications(newVerifications);
  };

  return (
    <Container>
      {verifications.map((verification, index) => (
        <Field key={index} onClick={() => handleClick(index)}>
          <VerifierIcon verification={verification} />
        </Field>
      ))}
    </Container>
  );
}

export default Verifier;
