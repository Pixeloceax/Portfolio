import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/main.css";
import "./styles/ticker.css";
import "./styles/circletext.css";
import "./styles/card.css";
import "./styles/about.css";
import "./styles/project.css";
import "./styles/contact.css";
import "./styles/navbar.css";
import "./styles/footer.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
