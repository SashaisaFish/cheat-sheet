const PROJECT_ID = "t7be7sw8";
const DATASET = "production";

/** find all instances of typeQuery
 * @param  {string} typeQuery
 */
async function queryType(typeQuery) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(`*[_type == "${typeQuery}"]`);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const { result } = await res.json();
	return result;
}

async function queryEntryTopic(topicQuery) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(
		`*[_type == "Entry" && topic == "${topicQuery}"]`
	);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const { result } = await res.json();
	return result;
}

async function queryParent(parentQuery) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(`*[parentId == ${parentQuery}]`);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const { result } = await res.json();
	return result;
}

async function queryTypeParent(parentQuery, typeQuery) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(
		`*[_type == "${typeQuery}" && parentId == ${parentQuery}]`
	);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const { result } = await res.json();
	return result;
}

async function queryNotTypeParent(parentQuery, typeQuery) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(
		`*[(!(_type == "${typeQuery}")) && parentId == ${parentQuery}] | order(createdAt)`
	);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const { result } = await res.json();
	return result;
}

function queryProjectDeprecated(query) {
	// 	let QUERY = encodeURIComponent(`*[_type == "${query}"]`);
	// 	let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// 	fetch(PROJECT_URL)
	// 		.then((res) => res.json())
	// 		.then(({ result }) => {
	// 			// get the list element, and the first item
	// 			// let list = document.querySelector("ul");
	// 			// let firstListItem = document.querySelector("ul li");
	// 			if (result.length > 0) {
	// 				// // remove the placeholder content
	// 				// list.removeChild(firstListItem);
	// 				// result.forEach((entry) => {
	// 				// 	// create a list element for each entry
	// 				// 	let listItem = document.createElement("li");
	// 				// 	// add the entry title as the text content
	// 				// 	listItem.textContent = entry?.title;
	// 				// 	// add the item to the list
	// 				// 	list.appendChild(listItem);
	// 				// });
	// 				let pre = document.getElementById("mI");
	// 				// add the raw data to the preformatted element
	// 				pre.textContent = JSON.stringify(result, null, 2);
	// 			} else {
	// 				pre.textContent = `"${query}" not found`;
	// 			}
	// 		})
	// 		.catch((err) => console.error(err));
}

export {
	queryType,
	queryEntryTopic,
	queryParent,
	queryTypeParent,
	queryNotTypeParent,
};
