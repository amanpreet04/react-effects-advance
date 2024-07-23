import { createContext, useState } from "react";
import Question from "../components/Question";
import questions from "../../questions";
const MAX_QUESTIONS = questions.length;

export const QuestionContext = createContext({
  answeredQuestions: [],
  skippedQuestions: [],
  getNextQuestionId: () => {},
});

function getRandomNumber() {
  return Math.floor(Math.random() * MAX_QUESTIONS);
}

export default function QuestionContextProvider({ children }) {
  const [viewedQuestions, setViewedQuestions] = useState([]);

  function addToViewedQuestions(id) {
    setViewedQuestions((prevViewedQuestions) => [...prevViewedQuestions, id]);
  }

  function getQuestion() {
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
    answeredQuestions: [],
    skippedQuestions: [],
    getNextQuestionId: getQuestion,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}
