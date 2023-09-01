import { useLocation } from "react-router-dom";
import FormQuiz from "../../components/FormQuiz/FormQuiz";

export default function Form() {
  // const token = sessionStorage.getItem("token");
  const location = useLocation();
  const quiz = location.state.quizName;
  // console.log("form QuizName:", quiz);

  return (
    <div>
      <h1>Form</h1>
      <FormQuiz quiz={quiz} />
    </div>
  );
}
