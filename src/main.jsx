import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QuestionContextProvider from "./store/question-context-store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuestionContextProvider>
    <App />
  </QuestionContextProvider>
);
