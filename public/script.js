// Constants
const entryContainer = document.getElementById("entry-container");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function test() {
	// const testDiv = document.createElement("div")
	// testDiv.id = "test-div"
	// testDiv.classList.add([])
	// main.append(testDiv)
}
/**Element: *Header*
 */
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

/**Element: *Nav*
 */
function makeNavBar() {
	const nav = document.querySelector("nav");
	// create <p> elements
	const indexText = createP("index-nav-text", "Home", "link-text");
	const htmlText = createP("html-nav-text", "HTML", "link-text");
	const cssText = createP("css-nav-text", "CSS", "link-text");
	const jsText = createP("js-nav-text", "JavaScript", "link-text");
	const reactText = createP("react-nav-text", "React", "link-text");
	const createPageText = createP("create-nav-text", "Create", "link-text");

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
	const reactLink = createLink("react-nav", "/react/", [
		"link-btn",
		"react-bubble",
	]);
	const createPageLink = createLink("create-nav", "/create/", [
		"link-btn",
		"create-bubble",
	]);

	// append <p> elements to <a> elements
	indexLink.append(indexText);
	htmlLink.append(htmlText);
	cssLink.append(cssText);
	jsLink.append(jsText);
	reactLink.append(reactText);
	createPageLink.append(createPageText);

	// append <a> elements to <nav> element
	nav.append(indexLink, htmlLink, cssLink, jsLink, reactLink, createPageLink);
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

// async function makeEntries(page) {
// 	// will act on load on every page
// 	// get info from database
// 	// entries is an array of all objects in database
// 	const entries = await Entry.findAll({
// 		where: { topic: page },
// 		include: { h4Tag, pTag, aTag, imgTag },
// 	});
// 	console.log(entries);
// 	// loop through each entry to make a dom object for each
// 	entries.forEach((entry) => {
// 		let element = document.createElement("article");
// 		element.id = entry.elementId;
// 		element.classList.add("info-article");
// 		let elementTitle = document.createElement("h3");
// 		elementTitle.classList.add("info-article-title");
// 		elementTitle.innerText = entry.title;
// 	});
// }

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
	test,
	makeHeader,
	makeNavBar,
	makeFooter,
	//makeEntries,
	createLink,
	createP,
	createImg,
	createElement,
};
