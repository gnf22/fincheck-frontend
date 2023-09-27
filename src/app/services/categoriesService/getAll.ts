import { Category } from "../../entities/Category";
import { httpClient } from "../httpClient";

type CategoriesRespose = Array<Category>;

export async function getAll() {
  const { data } = await httpClient.get<CategoriesRespose>('/categories');

  return data;
}
