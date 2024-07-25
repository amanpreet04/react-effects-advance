import { useContext, useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import QuestionContextProvider, {
  QuestionContext,
} from "./store/question-context-store";

function App() {
  const { currentQuestionId, getNextQuestionId } = useContext(QuestionContext);
  let content;
  if (currentQuestionId) {
    content = <Question />;
  } else {
    console.log("Questions Khatam");
  }
  return (
    <QuestionContextProvider>
      <Header heading="React Quiz" />
      {content}
    </QuestionContextProvider>
  );
}

export default App;
