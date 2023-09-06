import "./QuizGame.scss";
import QuizList from "../../components/QuizList/QuizList";
import { useNavigate } from "react-router-dom";

export default function QuizGame() {
  const navigate = useNavigate();
  return (
    <div className="quiz-game">
      <h1 onClick={() => navigate("/")} className="quiz-game__title">
        quiztopia
      </h1>
      <QuizList />
    </div>
  );
}
