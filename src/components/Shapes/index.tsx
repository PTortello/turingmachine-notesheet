import circle from "assets/circle.svg";
import square from "assets/square.svg";
import triangle from "assets/triangle.svg";
import { Container } from "./styles";

function Shapes() {
  return (
    <Container>
      <img src={triangle} alt="triangle" />
      <img src={square} alt="square" />
      <img src={circle} alt="circle" />
    </Container>
  );
}

export default Shapes;
