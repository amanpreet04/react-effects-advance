import { useContext } from "react";
import { QuestionContext } from "../store/question-context-store";

export default function Skip({ label }) {
  const { addToViewedQuestions } = useContext(QuestionContext);

  return (
    <div id="skip-action">
      <button
        onClick={() => addToViewedQuestions(currentQuestionId, "skipped")}
      >
        {label}
      </button>
    </div>
  );
}

//onClick={}
