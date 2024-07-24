import { useContext } from "react";
import { QuestionContext } from "../store/question-context-store";

export default function Options({ options }) {
  const { addToViewedQuestions, currentQuestionId } =
    useContext(QuestionContext);
  return (
    <>
      {options.map((option) => (
        <button
          onClick={() => addToViewedQuestions(currentQuestionId, "answered")}
          key={Math.random()}
          className="answer"
        >
          {option}
        </button>
      ))}
    </>
  );
}
