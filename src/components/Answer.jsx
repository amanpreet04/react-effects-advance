import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (isSelected && answerState === "answered") {
          cssClasses = "selected";
        }

        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
