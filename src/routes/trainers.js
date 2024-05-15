import express from "express";

import TrainerController from "../controllers/Trainer.Controller.js";

const router = express.Router();

router.get("/", TrainerController.index);

export default router;
