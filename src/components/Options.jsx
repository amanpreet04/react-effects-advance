import { useContext } from "react";
import { QuestionContext } from "../store/question-context-store";

export default function Options({ options }) {
  const {
    addToViewedQuestions,
    currentQuestionId,
    setCurrentQuestionId,
    getNextQuestionId,
  } = useContext(QuestionContext);

  function handleAnsweredQuestions() {
    addToViewedQuestions(currentQuestionId, "answered");
    setCurrentQuestionId(getNextQuestionId());
  }
  return (
    <>
      {options.map((option) => (
        <button
          onClick={() => handleAnsweredQuestions()}
          key={Math.random()}
          className="answer"
        >
          {option}
        </button>
      ))}
    </>
  );
}
