import { useContext } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import { QuestionContext } from "./store/question-context-store";
import Quiz from "./components/Quiz";

function App() {
  
  return (
    <>
      <Header heading="React Quiz" />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
