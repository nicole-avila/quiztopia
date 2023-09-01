import { fetchAllQuiz } from "../../api/fetchAllQuiz";

export default function QuizList() {
  fetchAllQuiz();
  return (
    <div>
      <h1>QUIZ LIST</h1>
    </div>
  );
}
