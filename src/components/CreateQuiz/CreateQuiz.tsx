import { useState } from "react";
import { fetchCreateQuiz } from "../../api/fetchCreateQuiz";

export default function CreateQuiz({
  navigate,
  token,
}: {
  navigate: any;
  token: string;
}) {
  const [quizName, setQuizName] = useState<string>("");

  async function goToForm(e: any) {
    e.preventDefault();
    await fetchCreateQuiz(quizName, token);
    navigate("/form");
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
