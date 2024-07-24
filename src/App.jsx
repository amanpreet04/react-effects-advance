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

function QuestionContextContainer() {
  const { getNextQuestionId, setCurrentQuestionId } =
    useContext(QuestionContext);
  const questionId = getNextQuestionId();
  useEffect(() => {
    if (questionId) {
      setCurrentQuestionId(questionId);
    }
  }, [questionId, setCurrentQuestionId]);

  let content;

  if (questionId) {
    content = <Question />;
  } else {
    console.log("QUESTIONS KHATAM");
  }
  return <>{content}</>;
}

export default App;
