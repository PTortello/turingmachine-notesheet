import { t } from "utils/translate";
import Canvas from "components/Canvas";
import { Button, Container, Content } from "./styles";

interface NotesProps {
  onClose: () => void;
}

function Notes({ onClose }: NotesProps) {
  return (
    <Container>
      <Content>
        <Canvas />
        <Button onClick={onClose}>{t("CLOSE")}</Button>
      </Content>
    </Container>
  );
}

export default Notes;
