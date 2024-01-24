import express from "express";
import cors from "cors";
import { message } from "./script";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send(message("Typescript and Javascript combination"));
});

app.listen(8000, () => {
  console.log(`Server running to port http://localhost:8000`);
});
