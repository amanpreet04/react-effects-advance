import { useContext } from "react";
import { QuestionContext } from "../store/question-context-store";

export default function Options({ options }) {
  const { addToViewedQuestions, currentQuestionId, setCurrentQuestionId } =
    useContext(QuestionContext);

  function handleAnsweredQuestions() {
    addToViewedQuestions(currentQuestionId, "skipped");
    setCurrentQuestionId(getNextQuestionId());
  }
  return (
    <>
      {options.map((option) => (
        <button
          onClick={() => handleAnsweredQuestions}
          key={Math.random()}
          className="answer"
        >
          {option}
        </button>
      ))}
    </>
  );
}
