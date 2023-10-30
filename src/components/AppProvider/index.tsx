import { canvasContext, useValueCanvas } from "contexts/canvasContext";

function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <canvasContext.Provider value={useValueCanvas()}>
      {children}
    </canvasContext.Provider>
  );
}

export default AppProvider;
