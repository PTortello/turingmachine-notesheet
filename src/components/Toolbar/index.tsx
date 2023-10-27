import edit from "assets/edit.svg";
import edit2 from "assets/edit2.svg";
import eraser from "assets/eraser.svg";
import eraser2 from "assets/eraser2.svg";
import reset from "assets/reset.svg";
import { Button, Container } from "./styles";

interface ToolbarProps {
  eraseMode: boolean;
  onChangeMode: () => void;
  onReset: () => void;
}

function Toolbar({ eraseMode, onChangeMode, onReset }: ToolbarProps) {
  return (
    <Container>
      <Button onClick={onChangeMode} active={!eraseMode}>
        <img src={!eraseMode ? edit2 : edit} />
      </Button>
      <Button onClick={onChangeMode} active={eraseMode}>
        <img src={eraseMode ? eraser2 : eraser} />
      </Button>
      <Button onClick={onReset} reset>
        <img src={reset} />
      </Button>
    </Container>
  );
}

export default Toolbar;
