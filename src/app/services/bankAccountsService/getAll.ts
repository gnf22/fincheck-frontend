import { BankAccount } from "../../entities/BankAccount";
import { httpClient } from "../httpClient";

type BankAccountsRespose = Array<BankAccount>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsRespose>('/bank-accounts');

  return data;
}

