import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/section/main.css";
import "./styles/components/ticker.css";
import "./styles/components/circletext.css";
import "./styles/components/card.css";
import "./styles/section/about.css";
import "./styles/section/project.css";
import "./styles/section/contact.css";
import "./styles/components/navbar.css";
import "./styles/section/footer.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
