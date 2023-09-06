import "./CreateQuiz.scss";
import { useState } from "react";
import { fetchCreateQuiz } from "../../api/fetchCreateQuiz";
import { useNavigate } from "react-router-dom";

export default function CreateQuiz() {
  const [quizName, setQuizName] = useState<string>("");
  const navigate = useNavigate();

  async function goToForm() {
    try {
      const data = await fetchCreateQuiz(quizName);

      if (data && data.success) {
        navigate("/form", { state: { quizName } });
      }
    } catch (error) {
      console.error("error during creating quiz name", error);
    }
  }

  return (
    <div className="create-quiz">
      <input
        className="create-quiz__input"
        onChange={(e) => setQuizName(e.target.value)}
        type="text"
        placeholder="Quiz name here..."
      />

      <button className="create-quiz__btn" onClick={goToForm}>
        Create Quiz
      </button>
    </div>
  );
}
