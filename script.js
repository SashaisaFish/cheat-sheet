// main script will be enacted across all pages

// Constants
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

/**Element: *Nav*
 */
function makeNavBar() {
	// Constants

	// // create <ul> element
	// const list = document.createElement("ul");

	// // set attributes
	// list.id = "nav-list";

	// // create <li> elements

	// const indexText = document.createElement("li");
	// const htmlText = document.createElement("li");
	// const cssText = document.createElement("li");
	// const jsText = document.createElement("li");
	// const domText = document.createElement("li");
	// const otherText = document.createElement("li");

	// // set attributess

	// indexText.id = "index-nav"
	// htmlText.id = "html-nav";
	// cssText.id = "css-nav";
	// jsText.id = "js-nav";
	// domText.id = "dom-nav";
	// otherText.id = "other-nav";

	// create <a> elements
	const indexLink = document.createElement("a");
	const htmlLink = document.createElement("a");
	const cssLink = document.createElement("a");
	const jsLink = document.createElement("a");
	const domLink = document.createElement("a");
	const otherLink = document.createElement("a");

	// set attributes
	setLinkAttributes(indexLink, "index-nav", "../index.html", "Home");
	setLinkAttributes(
		htmlLink,
		"html-nav",
		"../2-html-page/html-page.html",
		"HTML"
	);
	setLinkAttributes(
		cssLink,
		"css-nav",
		"../3-css-page/css-page.html",
		"CSS"
	);
	setLinkAttributes(
		jsLink,
		"js-nav",
		"../4-javascript-page/javascript-page.html",
		"JavaScript"
	);
	setLinkAttributes(
		domLink,
		"dom-nav",
		"../5-dom-page/dom-page.html",
		"DOM"
	);
	setLinkAttributes(
		otherLink,
		"other-nav",
		"../6-other-page/other-page.html",
		"Other"
	);

	// append <a> elements to <nav> element
	nav.append(indexLink, htmlLink, cssLink, jsLink, domLink, otherLink)

	// // append <a> elements to <li> elements
	// indexText.append(indexLink);
	// htmlText.append(htmlLink);
	// cssText.append(cssLink);
	// jsText.append(jsLink);
	// domText.append(domLink);
	// otherText.append(otherLink);

	// // append <li> elements to <ul> elements
	// list.append(indexText, htmlText, cssText, jsText, domText, otherText);

	// // append <ul> element to nav
	// nav.append(list);
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

/**CREATE LINK
 * @param  {} element
 * @param  {string} elementId
 * @param  {string} hrefLink
 * @param  {string} text
 */
function setLinkAttributes(element, elementId, hrefLink, text) {
	element.id = elementId
	element.href = hrefLink;
	element.innerText = text;
}
