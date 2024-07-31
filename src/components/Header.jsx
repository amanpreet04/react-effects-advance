import quizLogo from "../assets/quiz-logo.png";

export default function Header({ heading }) {
  return (
    <header>
      <img src={quizLogo} alt="quiz-logo" />
      <h1>{heading}</h1>
    </header>
  );
}
