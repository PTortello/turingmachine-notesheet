import { ThemeProvider } from "@emotion/react";
import { canvasContext, useValueCanvas } from "contexts/canvasContext";
import { theme } from "utils/theme";

function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <canvasContext.Provider value={useValueCanvas()}>
        {children}
      </canvasContext.Provider>
    </ThemeProvider>
  );
}

export default AppProvider;
