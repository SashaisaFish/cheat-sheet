import { Entry, h4Tag, pTag, aTag, imgTag } from "../models/index.js";
import { db } from "../db/db.js";

async function seed() {
	await db.sync({ force: true });
	await Entry.create({
		topic: "html",
		subtopic: "head",
		elementId: "head-tags",
		title: "Head Tags",
	});
	await h4Tag.create({
		parentId: "head-tags",
		text: "to set the viewport to resize",
	});
	await pTag.create({
		parentId: "head-tags",
		text: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
	});
	await aTag.create({
		parentId: "head-tags",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
		innerHtml: "MDN Web Docs",
	});
	await imgTag.create({
		parentId: "head-tags",
		src: "../../files-media/images/html-head-example",
		alt: "An example of an html head taken from mdn web docs",
	});
}

export { seed };
