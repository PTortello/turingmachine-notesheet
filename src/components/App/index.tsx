import { useState } from "react";
import AppProvider from "components/AppProvider";
import Header from "components/Header";
import Labels from "components/Labels";
import Notes from "components/Notes";
import Rounds from "components/Rounds";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AppProvider>
      <Header onOpen={() => setOpen(true)} />
      <Labels />
      <Rounds />
      {open && <Notes onClose={() => setOpen(false)} />}
    </AppProvider>
  );
}

export default App;
