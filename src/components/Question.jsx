import Answer from "./Answer";
import QuizTimer from "./QuizTimer";
const TIMER = 3000;

export default function Question({
  questionText,
  answers,
  onSelect,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuizTimer onTimeout={onSkipAnswer} timeout={TIMER} />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
}
