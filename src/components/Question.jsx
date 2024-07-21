import questions from "../../questions";
import Answer from "./Answer";

export default function Question({ questionId }) {
  const question = questions.find(
    (question) => question.id === questionId
  ).text;
  return (
    <div id="question">
      <>
        <h2>{question}</h2>
        <Answer questionId={questionId} />
      </>
    </div>
  );
}
