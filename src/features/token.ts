interface ApiAccountResponse {
  success: boolean;
  message?: string;
  account?: Account;
}

interface Account {
  password: string;
  userId: string;
  username: string;
}

export async function token() {
  const url =
    "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/login";
  const settings = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url, settings);
  const data: ApiAccountResponse = await response.json();
  console.log("handle Token Login:", data);
}
