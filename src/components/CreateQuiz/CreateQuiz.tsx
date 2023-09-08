import "./CreateQuiz.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateQuiz } from "../../api/fetchCreateQuiz";

export default function CreateQuiz() {
  const [quizName, setQuizName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  async function goToForm() {
    try {
      const data = await fetchCreateQuiz(quizName);

      if (data && data.success) {
        navigate("/form", { state: { quizName } });
      } else {
        setMessage("Quiz name is already taken, choose another");
      }
    } catch (error) {
      console.error("Error during creating quiz name", error);
    }
  }

  return (
    <div className="create-quiz">
      <div className="create-quiz__container">
        <p className="create-quiz__message">{message}</p>
      </div>
      <div>
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
    </div>
  );
}
