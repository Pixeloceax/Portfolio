import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.min.css";
import "./styles/section/main.min.css";
import "./styles/components/ticker.min.css";
import "./styles/components/circletext.min.css";
import "./styles/components/card.min.css";
import "./styles/section/about.min.css";
import "./styles/section/project.min.css";
import "./styles/section/contact.min.css";
import "./styles/components/navbar.min.css";
import "./styles/section/footer.min.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
