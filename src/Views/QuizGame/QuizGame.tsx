import "./QuizGame.scss";
import QuizzesList from "../../components/QuizzesList/QuizzesList";
import { useNavigate } from "react-router-dom";

export default function QuizGame() {
  const navigate = useNavigate();
  return (
    <div className="quiz-game">
      <h1 onClick={() => navigate("/")} className="quiz-game__title">
        quiztopia
      </h1>
      <div className="quiz-game__container">
        <QuizzesList />
      </div>
    </div>
  );
}
