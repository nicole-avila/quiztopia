type setState<T> = React.Dispatch<React.SetStateAction<T>>;

interface ApiLoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export async function authLoginJwc(
  username: string,
  password: string,
  setMessage: setState<string>
) {
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
  console.log("hanterar login", data);
  sessionStorage.setItem("token", JSON.stringify(data.token));

  if (data.success) {
    console.log("inloggad");
    setMessage("");
    return data;
  } else {
    setMessage("Det gick inte att logga in, försök igen");
  }
}
