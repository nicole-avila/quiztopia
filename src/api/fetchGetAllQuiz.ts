import { Quiz } from "../interfaces";

export async function fetchGetAllQuiz(): Promise<Quiz[]> {
  try {
    const url = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Hämtningen av status misslyckades ${response.status}`);
    }
    const data = await response.json();
    return data.quizzes;
  } catch (error) {
    console.error("oops, try agian!", error);

    throw error;
  }
}
