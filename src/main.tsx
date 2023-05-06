import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import NotificationProvider from "./context/NotificationContext";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
