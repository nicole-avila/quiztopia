import "./Form.scss";
import back from "../../../public/assets/go-back.svg";
import { useLocation, useNavigate } from "react-router-dom";
import FormQuiz from "../../components/FormQuiz/FormQuiz";

export default function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state.quizName;

  return (
    <div className="form-view">
      <div className="form-view__header">
        <div className="form-view__img-container">
          <img
            className="form-view__img-back"
            onClick={() => navigate(-1)}
            src={back}
            alt=""
          />
        </div>
      </div>
      <FormQuiz quiz={quiz} />
      <button
        className="form-view__btn-play-quiz"
        onClick={() => navigate("/quiz-game")}
      >
        play quiztopia{" "}
      </button>
    </div>
  );
}
