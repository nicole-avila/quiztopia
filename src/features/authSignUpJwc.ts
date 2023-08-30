type setState<T> = React.Dispatch<React.SetStateAction<T>>;

interface ApiSignUpResponse {
  success: boolean;
  message?: string;
}

export async function authSignUpJwc(
  username: string,
  password: string,
  setMessage: setState<string>
): Promise<ApiSignUpResponse> {
  const url =
    "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/signup";
  const settings = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  const response = await fetch(url, settings);
  const data: ApiSignUpResponse = await response.json();
  console.log("hantera registrering", data);
  if (data.success) {
    console.log("Registrering klar");
    setMessage(""); // Rensa meddelandet om inloggningen lyckades
    return data;
  } else {
    setMessage("Användarnamet är upptaget");
  }
}
