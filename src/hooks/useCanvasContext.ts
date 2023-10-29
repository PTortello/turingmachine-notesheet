import { useContext } from "react";
import { canvasContext } from "contexts/canvasContext";

const useCanvasContext = () => useContext(canvasContext);

export default useCanvasContext;
