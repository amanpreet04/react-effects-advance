import { useState } from "react";

import questions from "../questions";
import Header from "./components/Header";
import Question from "./components/Question";
const MAX_QUESTIONS = questions.length;

function getRandomNumber() {
  return Math.floor(Math.random() * MAX_QUESTIONS);
}

function App() {
  const [viewedQuestions, setViewedQuestions] = useState([]);

  function addToViewedQuestions(id) {
    setViewedQuestions(id);
  }

  function getQuestion() {
    let counter = MAX_QUESTIONS;
    while (counter--) {
      const randomIndex = getRandomNumber();
      const randomQuestionId = questions[randomIndex].id;
      if (!viewedQuestions.includes(randomQuestionId)) {
        return randomQuestionId;
      }
    }
    return false;
  }

  const questionId = getQuestion();
  let content;
  if (questionId) {
    content = <Question questionId={questionId} />;
  } else {
    console.log("QUESTIONS KHATAM");
  }

  return (
    <>
      <Header heading="React Quiz" />
      {content}
    </>
  );
}

export default App;
