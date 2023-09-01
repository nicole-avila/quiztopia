import { useState } from "react";
import { fetchCreateQuiz } from "../../api/fetchCreateQuiz";
import { useNavigate } from "react-router-dom";

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState<string>("");

  async function goToForm() {
    try {
      const data = await fetchCreateQuiz(quizName);
      console.log(data);

      if (data && data.success) {
        navigate("/form", { state: { quizName } });
        console.log(quizName);
      }
    } catch (error) {
      console.log("error during creating quiz name", error);
    }
  }

  return (
    <div className="createQuiz">
      <input
        onChange={(e) => setQuizName(e.target.value)}
        type="text"
        placeholder="quiz name"
      />

      <button onClick={goToForm}>Create Quiz</button>
    </div>
  );
}
