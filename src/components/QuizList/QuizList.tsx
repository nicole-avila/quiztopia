import "./QuizList.scss";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import { useEffect, useState } from "react";
import { QuestionData } from "../../interfaces";
import { fetchGetUserQuiz } from "../../api/fetchGetUserQuiz";

export interface Quiz {
  questions: QuestionData[];
  quizId: string;
  userId: string;
  username: string;
}

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const quizzes: Quiz[] = await fetchGetAllQuiz();
        setQuizzes(quizzes);
      } catch (error) {
        console.log("Något fel har skett", error);
      }
    }
    fetchData();
  }, []);

  async function handleGetUserQuiz(quiz: Quiz) {
    const { username, quizId, userId } = quiz;
    try {
      await fetchGetUserQuiz(username, quizId, userId);
      setSelectedQuiz(quiz);
    } catch (error) {
      console.log("något fel", error);
    }
  }

  return (
    <div className="quiz">
      <section className="quiz__list-container">
        {quizzes.map((quiz, index) => (
          <article
            onClick={() => handleGetUserQuiz(quiz)}
            key={index}
            className={`quiz__user-list ${
              selectedQuiz === quiz ? "selected" : ""
            }`}
          >
            <h5>{quiz.username}</h5>
            <p></p>
          </article>
        ))}
      </section>

      <section className="quiz__map-container">
        {selectedQuiz &&
          selectedQuiz.questions.map((question, index) => (
            <p key={index} className="quiz__map-question">
              Fråga: {question.question}
              <br />
              Svar: {question.answer}
            </p>
          ))}
        <div className="quiz__mapbox"></div>
      </section>
    </div>
  );
}
