import circle from "assets/circle.svg";
import square from "assets/square.svg";
import triangle from "assets/triangle.svg";
import { Container } from "./styles";

interface ShapesProps {
  horizontal?: boolean;
}

function Shapes({ horizontal }: ShapesProps) {
  return (
    <Container horizontal={horizontal}>
      <img src={triangle} alt="triangle" />
      <img src={square} alt="square" />
      <img src={circle} alt="circle" />
    </Container>
  );
}

export default Shapes;
