
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  
  <BrowserRouter>
  <App />
</BrowserRouter>
  </>
  
);
