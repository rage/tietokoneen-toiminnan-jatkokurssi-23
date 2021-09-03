import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v2/general/course/940b377f-4ef0-4d8d-a93e-e0df091d70bd/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/940b377f-4ef0-4d8d-a93e-e0df091d70bd/titles/fi_FI",
  )
  return response.data
}
