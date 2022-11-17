import { Router } from "express";
import {
	Entry,
	h4Tag,
	pTag,
	aTag,
	imgTag,
} from "../public/data/models/index.js";
const createRouter = Router();

createRouter.post("/new-entry", async (req, res) => {});

export { createRouter };
