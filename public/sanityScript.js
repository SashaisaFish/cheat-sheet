const PROJECT_ID = "t7be7sw8";
const DATASET = "production";

// https://t7be7sw8.api.sanity.io/v2021-10-21/data/query/production?query="Entry"
async function queryProjectII(query) {
	// define QUERY and PROJECT_URL
	const QUERY = encodeURIComponent(`*[_type == "${query}"]`);
	const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
	// fetch query
	const res = await fetch(PROJECT_URL);
	const result = await res.json();
	const pre = document.getElementById("mII");
	if (result.length > 0) {
		pre.textContent = JSON.stringify(result, null, 2);
	} else {
		pre.textContent = `"${query}" not found`;
	}
}

/** queryProject mkI
 * @param  {string} query
 */
function queryProject(query) {
	let QUERY = encodeURIComponent(`*[_type == "${query}"]`);

	let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	fetch(PROJECT_URL)
		.then((res) => res.json())
		.then(({ result }) => {
			// get the list element, and the first item
			// let list = document.querySelector("ul");
			// let firstListItem = document.querySelector("ul li");

			if (result.length > 0) {
				// // remove the placeholder content
				// list.removeChild(firstListItem);

				// result.forEach((entry) => {
				// 	// create a list element for each entry
				// 	let listItem = document.createElement("li");

				// 	// add the entry title as the text content
				// 	listItem.textContent = entry?.title;

				// 	// add the item to the list
				// 	list.appendChild(listItem);
				// });
				let pre = document.getElementById("mI");
				// add the raw data to the preformatted element
				pre.textContent = JSON.stringify(result, null, 2);
			} else {
				pre.textContent = `"${query}" not found`;
			}
		})
		.catch((err) => console.error(err));
}

export { queryProject, queryProjectII };
