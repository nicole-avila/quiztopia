import { useLocation, useNavigate } from "react-router-dom";
import FormQuiz from "../../components/FormQuiz/FormQuiz";

export default function Form() {
  // const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state.quizName;
  // console.log("form QuizName:", quiz);

  return (
    <div>
      <h2 onClick={() => navigate(-1)}>go back</h2>
      <FormQuiz quiz={quiz} />
    </div>
  );
}
