import { Quiz } from "../interfaces";

export async function fetchGetUserQuiz(
  username: string,
  quizId: string,
  userId: string
): Promise<Quiz> {
  try {
    const url = `https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/${userId}/${quizId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download from: ${username}`);
    }
    const data: Quiz = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Something went wrong", error);

    throw error;
  }
}
