import { useContext } from "react";
import questions from "../../questions";
import Answer from "./Answer";
import Skip from "./Skip";
import { QuestionContext } from "../store/question-context-store";

export default function Question() {
  const { currentQuestionId } = useContext(QuestionContext);
  console.log("currentQuestionId : " + currentQuestionId);
  const question = questions.find(
    (question) => question.id === currentQuestionId
  ).text;

  return (
    <div id="quiz">
      <>
        <h2>{question}</h2>
        <Answer />
        <Skip label="Skip" />
      </>
    </div>
  );
}
