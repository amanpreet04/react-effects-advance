import { useContext } from "react";
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
  const { getNextQuestionId } = useContext(QuestionContext);
  const questionId = getNextQuestionId();
  if (questionId) {
    content = <Question questionId={questionId} />;
  } else {
    console.log("QUESTIONS KHATAM");
  }
  return <>{content}</>;
}

export default App;
