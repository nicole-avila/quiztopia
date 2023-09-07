import { Quiz } from "../interfaces";

export async function fetchDeleteQuiz(quizId: string): Promise<Quiz> {
  const token = sessionStorage.getItem("token");

  try {
    const url = `https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/${quizId}`;
    const settings = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, settings);
    const data: Quiz = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred during deletion:", error);

    throw error;
  }
}
