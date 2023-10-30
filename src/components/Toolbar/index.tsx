import edit from "assets/images/edit.svg";
import edit2 from "assets/images/edit2.svg";
import eraser from "assets/images/eraser.svg";
import eraser2 from "assets/images/eraser2.svg";
import reset from "assets/images/reset.svg";
import { Button, Container } from "./styles";

interface ToolbarProps {
  eraseMode: boolean;
  onChangeMode: (erase: boolean) => void;
  onReset: () => void;
}

function Toolbar({ eraseMode, onChangeMode, onReset }: ToolbarProps) {
  return (
    <Container>
      <Button onClick={() => onChangeMode(false)} active={!eraseMode}>
        <img src={!eraseMode ? edit2 : edit} />
      </Button>
      <Button onClick={() => onChangeMode(true)} active={eraseMode}>
        <img src={eraseMode ? eraser2 : eraser} />
      </Button>
      <Button onClick={onReset} reset>
        <img src={reset} />
      </Button>
    </Container>
  );
}

export default Toolbar;
