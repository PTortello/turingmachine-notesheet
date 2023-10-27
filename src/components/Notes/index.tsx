import Canvas from "components/Canvas";
import { Button, Container, Content, Text, TextContainer } from "./styles";

interface NotesProps {
  onClose: () => void;
}

function Notes({ onClose }: NotesProps) {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Text>A</Text>
          <Text>B</Text>
          <Text>C</Text>
          <Text>D</Text>
          <Text>E</Text>
          <Text>F</Text>
        </TextContainer>
        <Canvas />
        <Button onClick={onClose}>Close</Button>
      </Content>
    </Container>
  );
}

export default Notes;
