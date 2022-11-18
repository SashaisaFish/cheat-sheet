import { Entry, H4Tag, PTag, ATag, ImgTag } from "../models/index.js";
import { db } from "../db/db.js";

async function seed() {
	await db.sync({ force: true });
	const entry = await Entry.create({
		topic: "html",
		subtopic: "head",
		elementId: "head-tags",
		title: "Head Tags",
	});
	const h4 = await H4Tag.create({
		text: "Set the Viewport To Resize",
	});
	const p = await PTag.create({
		text: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
	});
	const a = await ATag.create({
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
		innerHtml: "MDN Web Docs",
	});
	const img = await ImgTag.create({
		src: "../../files-media/images/html-head-example",
		alt: "An example of an html head taken from mdn web docs",
	});

	entry.addH4Tag(h4);
	entry.addPTag(p);
	entry.addATag(a);
	entry.addImgTag(img);
}

export { seed };
