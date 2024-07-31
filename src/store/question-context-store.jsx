import { createContext, useState } from "react";
import questions from "../../questions";
const MAX_QUESTIONS = questions.length;

export const QuestionContext = createContext({
  viewedQuestions: [],
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
  const [currentQuestionId, setCurrentQuestionId] = useState(
    getNextQuestionId()
  );

  function addToViewedQuestions(id, response) {
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
        return randomQuestionId;
      }
    }
    return false;
  }

  const contextValue = {
    viewedQuestions,
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
