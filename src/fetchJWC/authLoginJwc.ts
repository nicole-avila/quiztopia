import { ApiLoginResponse, setState } from "../interfaces";

export async function authLoginJwc(
  username: string,
  password: string,
  setMessage: setState<string>
) {
  try {
    const url =
      "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/login";
    const settings = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    const response = await fetch(url, settings);
    const data: ApiLoginResponse = await response.json();
    sessionStorage.setItem("token", JSON.stringify(data.token));

    if (data.success) {
      return data;
    } else {
      setMessage("Login failed, please try again");
    }
  } catch (error) {
    console.error("Oops, try again", error);
  }
}
