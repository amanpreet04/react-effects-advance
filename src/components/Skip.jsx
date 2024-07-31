import { useContext } from "react";
import { QuestionContext } from "../store/question-context-store";

export default function Skip({ label }) {
  const {
    addToViewedQuestions,
    currentQuestionId,
    setCurrentQuestionId,
    getNextQuestionId,
  } = useContext(QuestionContext);

  function handleSkipQuestions() {
    addToViewedQuestions(currentQuestionId, "skipped");
    setCurrentQuestionId(getNextQuestionId());
  }
  return (
    <div id="skip-action">
      <button onClick={() => handleSkipQuestions()}>{label}</button>
    </div>
  );
}

