import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import CalculatorPage from "./pages/CalculatorPage";
import LanguageSelector from "./pages/LanguageSelector";

ReactDOM.render(

  <React.StrictMode>
    
    <div>
     
      <CalculatorPage />
      <LanguageSelector />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
