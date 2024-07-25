import { createContext, useState } from "react";
import Question from "../components/Question";
import questions from "../../questions";
const MAX_QUESTIONS = questions.length;

export const QuestionContext = createContext({
  answeredQuestions: [],
  skippedQuestions: [],
  currentQuestionId: null,
  getNextQuestionId: () => {},
  setCurrentQuestionId: () => {},
  addToViewedQuestions: () => {},
});

function getRandomNumber() {
  return Math.floor(Math.random() * MAX_QUESTIONS);
}

export default function QuestionContextProvider({ children }) {
  const [viewedQuestions, setViewedQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  function addToViewedQuestions(id, response) {
    setCurrentQuestionId(id);
    setViewedQuestions((prevViewedQuestions) => [
      ...prevViewedQuestions,
      { questionId: id, response },
    ]);
  }

  function handleCurrentQuestion(id) {
    setCurrentQuestionId(id);
  }

  function getNextQuestionId() {
    let counter = MAX_QUESTIONS;
    while (counter--) {
      const randomIndex = getRandomNumber();
      const randomQuestionId = questions[randomIndex].id;
      console.log(randomQuestionId);
      console.log(viewedQuestions);
      if (!viewedQuestions.includes(randomQuestionId)) {
        // handleCurrentQuestion(randomQuestionId);
        return randomQuestionId;
      }
    }
    return false;
  }

  const contextValue = {
    answeredQuestions: [],
    skippedQuestions: [],
    currentQuestionId: currentQuestionId,
    getNextQuestionId,
    setCurrentQuestionId: handleCurrentQuestion,
    addToViewedQuestions,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}
