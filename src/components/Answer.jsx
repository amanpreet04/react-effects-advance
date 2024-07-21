import questions from "../../questions";
import Options from "./Options";

export default function Answer({ questionId }) {
  const options = questions.find(
    (question) => question.id === questionId
  ).answers;
  return (
    <div id="answers">
      <Options options={options} />
    </div>
  );
}
