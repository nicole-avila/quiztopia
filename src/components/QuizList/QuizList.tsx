import "./QuizList.scss";
import { fetchGetAllQuiz } from "../../api/fetchGetAllQuiz";
import Mapbox from "../Mapbox/Mapbox";
import { useEffect, useState } from "react";
import { QuestionData } from "../../interfaces";

export interface Quiz {
  questions: QuestionData;
  username: string;
  quizId: string;
  userId: string;
}

export default function QuizList() {
  const [userQuiz, setUserQuiz] = useState<Quiz[]>([]); //userQuizzes
  console.log(userQuiz);

  useEffect(() => {
    async function fetchData() {
      console.log(1);
      try {
        const quizzes: Quiz[] = await fetchGetAllQuiz();
        console.log(2);

        setUserQuiz(quizzes);
        console.log(quizzes);
      } catch (error) {
        console.log("Något fel har skett", error);
      }
    }
    fetchData();
    console.log(4); //Får bara ut en tom array..Fortsätt imorgon
  }, []);

  return (
    <div className="quiz">
      <section className="quiz__list-container">
        {userQuiz.map((quiz, index) => (
          <article key={index} className="quiz__user-list">
            <h5>{quiz.username}</h5>
            <p></p>
          </article>
        ))}
      </section>

      <section className="quiz__map-container">
        <p className="quiz__map-question">
          frågan hamnar här men en massa text.. varför skrev jag inte in lorem P
          ibörjan så hade jag sluppit skriva texten.
        </p>
        <div className="quiz__mapbox">
          <Mapbox />
        </div>
      </section>
    </div>
  );
}
