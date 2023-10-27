import { useState } from "react";
import edit from "assets/edit.svg";
import edit2 from "assets/edit2.svg";
import eraser from "assets/eraser.svg";
import eraser2 from "assets/eraser2.svg";
import reset from "assets/reset.svg";
import { Button, Container } from "./styles";

function Toolbar() {
  const [eraseMode, setEraseMode] = useState(false);

  return (
    <Container>
      <Button onClick={() => setEraseMode(false)} active={!eraseMode}>
        <img src={!eraseMode ? edit2 : edit} />
      </Button>
      <Button onClick={() => setEraseMode(true)} active={eraseMode}>
        <img src={eraseMode ? eraser2 : eraser} />
      </Button>
      <Button onClick={() => console.log("reset")} reset>
        <img src={reset} />
      </Button>
    </Container>
  );
}

export default Toolbar;
