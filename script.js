// main script will be enacted across all pages

// Constants
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

/**Element: *Nav*
 */
function makeNavBar() {
	// declare variables
	let indexText;
	let indexLink;
	let htmlText;
	let htmlLink;
	let cssText;
	let cssLink;
	let jsText;
	let jsLink;
	let domText;
	let domLink;
	let otherText;
	let otherLink;

	// create <p> elements
	indexText = createP(indexText, "index-nav-text", "link-text", "Home");
	htmlText = createP(htmlText, "html-nav-text", "link-text", "HTML");
	cssText = createP(cssText, "css-nav-text", "link-text", "CSS");
	jsText = createP(jsText, "js-nav-text", "link-text", "JavaScript");
	domText = createP(domText, "dom-nav-text", "link-text", "DOM");
	otherText = createP(otherText, "other-nav-text", "link-text", "Other");

	// create <a> elements

	indexLink = createLink(indexLink, "index-nav", "../index.html", "link-btn");
	htmlLink = createLink(
		htmlLink,
		"html-nav",
		"../2-html-page/html-page.html",
		"link-btn"
	);
	cssLink = createLink(
		cssLink,
		"css-nav",
		"../3-css-page/css-page.html",
		"link-btn"
	);
	jsLink = createLink(
		jsLink,
		"js-nav",
		"../4-javascript-page/javascript-page.html",
		"link-btn"
	);
	domLink = createLink(
		domLink,
		"dom-nav",
		"../5-dom-page/dom-page.html",
		"link-btn"
	);
	otherLink = createLink(
		otherLink,
		"other-nav",
		"../6-other-page/other-page.html",
		"link-btn"
	);

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
makeNavBar();

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
makeFooter();

// HELPER FUNCTIONS

/**CREATE LINK ELEMENT
 * @param  {string} elementName
 * @param  {string} elementId
 * @param  {string} hrefLink
 */
function createLink(elementName, elementId, elementLink, elementClasses) {
	elementName = document.createElement("a");
	elementName.id = elementId;
	elementName.href = elementLink;
	elementName.classList.add(elementClasses);
	return elementName;
}
/** CREATE P ELEMENT
 * @param  {string} elementName
 * @param  {string} elementId
 * @param  {string} elementClasses
 * @param  {string} text
 */
function createP(elementName, elementId, elementClasses, text) {
	elementName = document.createElement("p");
	elementName.id = elementId;
	elementName.classList.add(elementClasses);
	elementName.innerText = text;
	return elementName;
}
