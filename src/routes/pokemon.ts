import { Router } from "express";
import {
  catchPokemon,
  releasePokemon,
  renamePokemon,
} from "../controllers/pokemonController";

const router = Router();

router.get("/catch-pokemon", catchPokemon);
router.post("/release-pokemon", releasePokemon);
router.post("/rename-pokemon", renamePokemon);

export default router;
