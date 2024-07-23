import questions from "../../questions";
import Answer from "./Answer";
import Skip from "./Skip";

export default function Question({ questionId }) {
  const question = questions.find(
    (question) => question.id === questionId
  ).text;
  return (
    <div id="quiz">
      <>
        <h2>{question}</h2>
        <Answer questionId={questionId} />
        <Skip label="Skip" />
      </>
    </div>
  );
}
