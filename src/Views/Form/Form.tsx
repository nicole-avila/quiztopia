import "./Form.scss";
import { useLocation, useNavigate } from "react-router-dom";
import FormQuiz from "../../components/FormQuiz/FormQuiz";

export default function Form() {
  // const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state.quizName;
  // console.log("form QuizName:", quiz);

  return (
    <div className="form-view">
      <div className="form-view__header">
        <div className="form-view__img-container">
          <img
            className="form-view__img"
            onClick={() => navigate(-1)}
            src="../../src/assets/go-back.svg"
            alt=""
          />
        </div>
        <button
          className="form-view__btn-play-quiz"
          onClick={() => navigate("/quiz-game")}
        >
          play quiz{" "}
        </button>
      </div>
      <FormQuiz quiz={quiz} />
    </div>
  );
}
