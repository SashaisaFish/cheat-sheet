// main script will be enacted across all pages

// Constants
const entryContainer = document.getElementById("entry-container");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

/**Element: *Nav*
 */
function makeNavBar() {
	// declare variables
	// let indexText;
	// let indexLink;
	// let htmlText;
	// let htmlLink;
	// let cssText;
	// let cssLink;
	// let jsText;
	// let jsLink;
	// let domText;
	// let domLink;
	// let otherText;
	// let otherLink;

	// create <p> elements
	const indexText = createP("index-nav-text", "link-text", "Home");
	const htmlText = createP("html-nav-text", "link-text", "HTML");
	const cssText = createP("css-nav-text", "link-text", "CSS");
	const jsText = createP("js-nav-text", "link-text", "JavaScript");
	const domText = createP("dom-nav-text", "link-text", "DOM");
	const otherText = createP("other-nav-text", "link-text", "Other");

	// create <a> elements

	const indexLink = createLink("index-nav", "/index/", [
		"link-btn",
		"index-bubble",
	]);
	const htmlLink = createLink("html-nav", "/html/", [
		"link-btn",
		"html-bubble",
	]);
	const cssLink = createLink("css-nav", "/css/", ["link-btn", "css-bubble"]);
	const jsLink = createLink("js-nav", "/js/", ["link-btn", "js-bubble"]);
	const domLink = createLink("dom-nav", "/dom/", ["link-btn", "dom-bubble"]);
	const otherLink = createLink("other-nav", "/other/", [
		"link-btn",
		"other-bubble",
	]);

	// append <p> elements to <a> elements
	indexLink.append(indexText);
	htmlLink.append(htmlText);
	cssLink.append(cssText);
	jsLink.append(jsText);
	domLink.append(domText);
	otherLink.append(otherText);

	// append <a> elements to <nav> element
	nav.append(indexLink, htmlLink, cssLink, jsLink, domLink, otherLink);
}

/**Element: *Footer*
 */
function makeFooter() {
	const footer = document.querySelector("footer");
	const today = new Date();
	const year = today.getFullYear();
	const footerText = document.createElement("p");
	footerText.innerText = `©${year} Sasha Windred`;
	footer.append(footerText);
}

function makeEntry(entryObject) {
	//declare constants
	const elementId = entryObject["elementId"];
	const entryTitleText = entryObject["title"];
	const entryHtml = entryObject["entry"];

	// create article
	const fullEntry = document.createElement("article");
	// add attributes
	fullEntry.id = elementId;
	fullEntry.classList.add("info-article");
	// append to entryContainer
	entryContainer.append(fullEntry);

	// create title
	const entryTitle = document.createElement("h3");
	// add attributes
	entryTitle.innerText = entryTitleText;
	entryTitle.classList.add("info-title");
	// append to fullEntry
	fullEntry.append(entryTitle);

	//create inner entry
	const innerEntry = document.createElement("section");
	// add attributes
	innerEntry.id = `${elementId}-entry`;
	innerEntry.classList.add("info-entry", "hidden");
	innerEntry.innerHTML = entryHtml;
	// append to fullEntry
	fullEntry.append(innerEntry);
}

// HELPER FUNCTIONS

/**CREATE LINK ELEMENT
 * @param  {string} elementName
 * @param  {string} elementId
 * @param  {string} hrefLink
 */
function createLink(elementId, elementLink, elementClasses) {
	const element = document.createElement("a");
	element.id = elementId;
	element.href = elementLink;
	element.classList.add(...elementClasses);
	return element;
}
/** CREATE P ELEMENT
 * @param  {string} elementName
 * @param  {string} elementId
 * @param  {string} elementClasses
 * @param  {string} text
 */
function createP(elementId, elementClasses, text) {
	const element = document.createElement("p");
	element.id = elementId;
	element.classList.add(elementClasses);
	element.innerText = text;
	return element;
}

export { makeEntry, makeNavBar, makeFooter, createLink, createP };
