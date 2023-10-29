import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import useCanvasContext from "hooks/useCanvasContext";
import Toolbar from "components/Toolbar";
import { Text, TextContainer } from "./styles";

function Canvas() {
  const [activeNote, setActiveNote] = useState(0);
  const [eraseMode, setEraseMode] = useState(false);
  const { notes, setNotes } = useCanvasContext();
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);

  const handleActive = (index: number) => {
    setActiveNote(index);
    canvasRef.current?.resetCanvas();
  };

  const handleChangeMode = (erase: boolean) => {
    setEraseMode(erase);
    canvasRef.current?.eraseMode(erase);
  };

  const handleReset = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
    canvasRef.current?.resetCanvas();
    const newNotes = [...notes];
    newNotes[activeNote].paths = [];
    setNotes(newNotes);
  };

  const handleStroke = () => {
    const newNotes = [...notes];
    canvasRef.current?.exportPaths().then((data) => {
      newNotes[activeNote].paths = data;
      setNotes(newNotes);
    });
  };

  useEffect(() => {
    canvasRef.current?.loadPaths(notes[activeNote].paths!);
  }, [activeNote]);

  return (
    <>
      <TextContainer>
        {notes.map((note, index) => (
          <Text
            key={index}
            active={activeNote === index}
            onClick={() => handleActive(index)}
          >
            {note.label}
          </Text>
        ))}
      </TextContainer>
      <Toolbar
        eraseMode={eraseMode}
        onChangeMode={(erase) => handleChangeMode(erase)}
        onReset={() => handleReset()}
      />
      <ReactSketchCanvas
        ref={canvasRef}
        height="60vh"
        onStroke={() => handleStroke()}
        style={{ border: "2px solid #2db563" }}
        strokeColor="#635994"
        eraserWidth={12}
      />
    </>
  );
}

export default Canvas;
