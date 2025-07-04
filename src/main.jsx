import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Content from "./Constants/Content.jsx";

createRoot(document.getElementById("root")).render(
  <Content>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Content>
);
