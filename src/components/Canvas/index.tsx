import { useRef } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Toolbar from "components/Toolbar";

function Canvas() {
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);
  canvasRef.current && canvasRef.current.eraseMode(false);

  return (
    <>
      <Toolbar />
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ border: "2px solid #2db563" }}
        strokeColor="#635994"
        strokeWidth={2}
      />
    </>
  );
}

export default Canvas;
