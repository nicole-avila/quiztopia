import { ApiSignUpResponse } from "../interfaces";

export async function authSignUpJwc(
  username: string,
  password: string
): Promise<ApiSignUpResponse> {
  try {
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

    if (data.success) {
      // console.log("Sign up succes!");
    }
    return data;
  } catch (error) {
    console.error("An error occurred while processing your request", error);

    throw error;
  }
}
