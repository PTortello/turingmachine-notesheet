import { INITIAL_NOTES } from "constants/initialValues";
import { Container, Text } from "./styles";

function Letters() {
  return (
    <Container>
      {INITIAL_NOTES.map((note, index) => (
        <Text key={index}>{note.label}</Text>
      ))}
    </Container>
  );
}

export default Letters;
