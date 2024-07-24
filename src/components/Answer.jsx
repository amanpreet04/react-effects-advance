import { useContext } from "react";
import questions from "../../questions";
import Options from "./Options";
import { QuestionContext } from "../store/question-context-store";

export default function Answer() {
  const { currentQuestionId } = useContext(QuestionContext);
  const options = questions.find(
    (question) => question.id === currentQuestionId
  ).answers;
  return (
    <div id="answers">
      <Options options={options} />
    </div>
  );
}
