import { CanvasPath } from "react-sketch-canvas";

export interface INote {
  label: string;
  paths: CanvasPath[] | undefined;
}
