import { API_URL } from "../constants/API_URL.js";

export async function getData() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();
  return data;
}
