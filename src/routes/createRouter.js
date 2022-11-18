//imports
import { Router } from "express";
import { Entry, H4Tag, PTag, ATag, ImgTag } from "../models/index.js";

// set router
const createRouter = Router();

createRouter.post("/new-entry", async (req, res) => {
	await Entry.create({
		topic: req.body.topic,
		subtopic: req.body.subtopic,
		elementId: req.body.elementId,
		title: req.body.title,
		classes: "info-article",
	});
});

createRouter.post("/fill-entry/h4", async (req, res) => {
	await H4Tag.create({
		parentId: req.body.h4ParentId,
		elementId: req.body.h4ElementId,
		text: req.body.h4Text,
		classes: "info-entry",
	});
});

createRouter.post("/fill-entry/p", async (req, res) => {
	await PTag.create({
		parentId: req.body.pParentId,
		elementId: req.body.pElementId,
		text: req.body.pText,
		classes: "info-entry",
	});
});

createRouter.post("/fill-entry/a", async (req, res) => {
	await ATag.create({
		parentId: req.body.aParentId,
		elementId: req.body.aElementId,
		href: req.body.aHref,
		innerHtml: req.body.aText,
		classes: "info-entry",
	});
});

createRouter.post("/fill-entry/img", async (req, res) => {
	await ImgTag.create({
		parentId: req.body.imgParentId,
		elementId: req.body.imgElementId,
		src: req.body.imgSrc,
		alt: req.body.imgAlt,
		classes: "info-entry",
	});
});

export { createRouter };
