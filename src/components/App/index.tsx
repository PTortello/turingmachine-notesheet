import { useState } from "react";
import Header from "components/Header";
import Labels from "components/Labels";
import Notes from "components/Notes";
import Rounds from "components/Rounds";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header onOpen={() => setOpen(true)} />
      <Labels />
      <Rounds />
      {open && <Notes onClose={() => setOpen(false)} />}
    </>
  );
}

export default App;
