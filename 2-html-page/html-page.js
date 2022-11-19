import {
	queryType,
	queryEntryTopic,
	queryParent,
	queryTypeParent,
	queryNotTypeParent,
} from "../public/sanityScript.js";

const container = document.getElementById("article-container");
const entries = await queryEntryTopic("html");
console.log(entries);
const allChildren = await queryParent(`"Head Tags"`);
console.log("ALL NO FUNC:", allChildren);

entries.forEach(async (entry) => {
	const newEntry = document.createElement("article");
	container.append(newEntry);
	newEntry.id = entry.elementId;
	newEntry.classList.add("info-article");
	// add title
	const newEntryTitle = document.createElement("h3");
	newEntry.append(newEntryTitle);
	newEntryTitle.innerText = entry.title;
	newEntryTitle.classList.add("info-article-title");
	// add container for child elements
	const newEntryInfo = document.createElement("section");
	newEntry.append(newEntryInfo);
	newEntryInfo.id = `${entry.elementId}-info`;
	newEntryInfo.classList.add("info-entry-container");
	const h4Children = await queryTypeParent(entry.title, "H4Tag");
	// h4Children.forEach((element) => {
	// 	const newH4 = document.createElement("h4");
	// 	newEntryInfo.append(newH4);
	// 	newH4.innerText = element.content;
	// });
	console.log(entry.title);
	const allChildren = await queryParent(entry.title);
	const otherChildren = await queryNotTypeParent(entry.title, "H4Tag");
	console.log("ALL:", allChildren);
	console.log("OTHER:", otherChildren);

	// const pChildren = await queryTypeParent(entry.elementId, "PTag");
	// pChildren.forEach((element) => {
	// 	const newP = document.createElement("p");
	// 	newEntryInfo.append(newP);
	// 	newP.innerText = element.content;
	// });
	// const aChildren = await queryTypeParent(entry.elementId, "ATag");
	// aChildren.forEach((element) => {
	// 	const newA = document.createElement("a");
	// 	newEntryInfo.append(newA);
	// 	newA.innerText = element.content;
	// });

	// children.forEach(async () => {
	// 	// find any h4
	//     const h4Tags = await queryProject("H4Tag");

	// 	const pTags = await queryProject("PTag");
	// 	const aTags = await queryProject("ATag");
	// 	const imgTags = await queryProject("ImgTag");
	// });
});
