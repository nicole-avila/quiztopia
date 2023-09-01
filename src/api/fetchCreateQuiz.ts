interface CreateQuizResponse {
  success: true;
  quizId: string;
  token?: string;
}

export async function fetchCreateQuiz(
  quizName: string
): Promise<CreateQuizResponse> {
  const token = sessionStorage.getItem("token");
  const url = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
  const settings = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: quizName }),
  };
  const response = await fetch(url, settings);
  const data: CreateQuizResponse = await response.json();
  console.log("Skapar quiz", data);

  return data;
}
