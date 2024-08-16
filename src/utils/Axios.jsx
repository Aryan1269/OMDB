import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTY5ODZiMjgxNmRmYjBlYzFlYzFlMjlkMzY3YjU3MCIsIm5iZiI6MTcyMzcxNDMzNS4xNTg4NTksInN1YiI6IjY2YjQ5YTBlMGQyNmE3ZjFhODg4ODk1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbdoIH2MaCGBcRv15sguOF1S6F76IkBLvXnaUGolVZ0",
  },
});

export default instance;
