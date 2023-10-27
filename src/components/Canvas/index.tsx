import { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Toolbar from "components/Toolbar";

function Canvas() {
  const [eraseMode, setEraseMode] = useState(false);
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);

  const handleChangeMode = () => {
    setEraseMode(!eraseMode);
    canvasRef.current?.eraseMode(!eraseMode);
  };

  return (
    <>
      <Toolbar
        eraseMode={eraseMode}
        onChangeMode={() => handleChangeMode()}
        onReset={() => canvasRef.current?.resetCanvas()}
      />
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
