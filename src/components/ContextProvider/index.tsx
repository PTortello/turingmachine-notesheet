import { canvasContext, useValueCanvas } from "contexts/canvasContext";

function ContextProvider({ children }: React.PropsWithChildren) {
  return (
    <canvasContext.Provider value={useValueCanvas()}>
      {children}
    </canvasContext.Provider>
  );
}

export default ContextProvider;
