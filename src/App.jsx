import { useContext } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import { QuestionContext } from "./store/question-context-store";

function App() {
  const { currentQuestionId } = useContext(QuestionContext);
  let content;
  if (currentQuestionId) {
    content = <Question />;
  } else {
    console.log("Questions Khatam");
  }
  return (
    <>
      <Header heading="React Quiz" />
      {content}
    </>
  );
}

export default App;
