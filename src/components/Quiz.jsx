import { useCallback, useState } from "react";
import QUESTIONS from "../../questions";
import quizCompletedImage from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

const TIMER = 3000;
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionId = userAnswers.length;

  const quizCompleted = activeQuestionId === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImage} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = QUESTIONS[activeQuestionId].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={activeQuestionId}
          onTimeout={handleSkipAnswer}
          timeout={TIMER}
        />
        <h2>{QUESTIONS[activeQuestionId].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
