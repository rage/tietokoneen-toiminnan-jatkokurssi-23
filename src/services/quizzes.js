import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v2/general/course/233726af-69b5-4c98-b902-38f1d63083c1/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/233726af-69b5-4c98-b902-38f1d63083c1/titles/fi_FI",
  )
  return response.data
}
