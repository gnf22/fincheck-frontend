import { httpClient } from "../httpClient";

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export async function signin(params: SignInParams) {
  const { data } = await httpClient.post<SignInResponse>('/auth/signin', params);

  return data;
}

