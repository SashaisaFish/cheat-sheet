// main script will be enacted across all pages

// Constants
const entryContainer = document.getElementById("entry-container");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function makeHeader() {
	// create link w/ href /index/
	const headerLink = createLink("header-link", "/index/");
	// create h1 w/ id main-header and inner text Cheat Sheet
	const headerText = createElement("h1", "header-text");
	headerText.innerText = "Cheat Sheet";
	// append h1 to link
	headerLink.append(headerText);
	// append link to header
	header.append(headerLink);

	// create img with src "../public/logo.svg" and alt "logo"
	const headerLogo = createImg("header-logo", "../public/logo.svg", "logo", [
		"header-logo",
	]);
	// append img to header
	header.append(headerLogo);

	// create nav
	const navElement = document.createElement("nav");
	// append nav to header
	header.append(navElement);
}
// <a href="/index/"><h1>Cheat Sheet</h1></a>
// <img src="../public/logo.svg" alt="logo" />
// <nav></nav>

/**Element: *Nav*
 */
function makeNavBar() {
	const nav = document.querySelector("nav");
	// create <p> elements
	const indexText = createP("index-nav-text", "Home", "link-text");
	const htmlText = createP("html-nav-text", "HTML", "link-text");
	const cssText = createP("css-nav-text", "CSS", "link-text");
	const jsText = createP("js-nav-text", "JavaScript", "link-text");
	const domText = createP("dom-nav-text", "DOM", "link-text");
	const otherText = createP("other-nav-text", "Other", "link-text");

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
 * @param  {string} elementId
 * @param  {string} elementLink
 * @param  {string, array} elementClasses (optional)
 */
function createLink(elementId, elementLink, elementClasses) {
	const element = document.createElement("a");
	element.id = elementId;
	element.href = elementLink;
	if (elementClasses) {
		if (Array.isArray(elementClasses)) {
			element.classList.add(...elementClasses);
		} else {
			element.classList.add(elementClasses);
		}
	}
	return element;
}
/** CREATE P ELEMENT
 * @param  {string} elementId
 * @param  {string} text
 * @param  {string, array} elementClasses (optional)
 */
function createP(elementId, text, elementClasses) {
	const element = document.createElement("p");
	element.id = elementId;
	element.innerText = text;
	if (elementClasses) {
		if (Array.isArray(elementClasses)) {
			element.classList.add(...elementClasses);
		} else {
			element.classList.add(elementClasses);
		}
	}
	return element;
}
/** CREATE IMAGE ELEMENT
 * @param  {string} elementId
 * @param  {url} imgSrc
 * @param  {string} imgAlt
 * @param  {string, array} elementClasses (optional)
 */
function createImg(elementId, imgSrc, imgAlt, elementClasses) {
	const element = document.createElement("img");
	element.id = elementId;
	element.src = imgSrc;
	element.alt = imgAlt;
	if (elementClasses) {
		if (Array.isArray(elementClasses)) {
			element.classList.add(...elementClasses);
		} else {
			element.classList.add(elementClasses);
		}
	}
	return element;
}
/** CREATE ELEMENT OF INPUT TYPE
 * @param  {string} elementType
 * @param  {string} elementId
 * @param  {string} elementClasses (optional)
 */
function createElement(elementType, elementId, elementClasses) {
	const element = document.createElement(elementType);
	element.id = elementId;
	if (elementClasses) {
		if (Array.isArray(elementClasses)) {
			element.classList.add(...elementClasses);
		} else {
			element.classList.add(elementClasses);
		}
	}
	return element;
}

export {
	makeHeader,
	makeNavBar,
	makeFooter,
	makeEntry,
	createLink,
	createP,
	createImg,
	createElement,
};
