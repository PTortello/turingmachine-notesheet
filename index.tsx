import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import "i18n/i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
