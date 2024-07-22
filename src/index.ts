import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemon";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
