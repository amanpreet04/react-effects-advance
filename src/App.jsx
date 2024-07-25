import { useContext, useEffect } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import QuestionContextProvider, {
  QuestionContext,
} from "./store/question-context-store";

function App() {
  return (
    <QuestionContextProvider>
      <Header heading="React Quiz" />
      <QuestionContextContainer />
    </QuestionContextProvider>
  );
}

export default App;
