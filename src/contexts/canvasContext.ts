import { createContext, useState } from "react";
import { INITIAL_NOTES } from "constants/initialValues";
import { INote } from "interfaces/note";

interface ICanvasContext {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
}

export const canvasContext = createContext<ICanvasContext>({
  notes: INITIAL_NOTES,
  setNotes: () => {},
});

export const useValueCanvas = () => {
  const [notes, setNotes] = useState(INITIAL_NOTES);
  return {
    notes,
    setNotes,
  };
};
