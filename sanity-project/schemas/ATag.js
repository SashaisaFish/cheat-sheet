export default {
	name: "ATag",
	type: "document",
	title: "<a> Tag",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			title: "Parent Title",
			name: "parentTitle",
			type: "reference",
			to: [{ type: "Entry" }],
		},
		{
			name: "childId",
			type: "string",
			title: "Child ID",
		},
		{
			name: "href",
			type: "string",
			title: "href",
		},
		{
			name: "htmlContent",
			type: "string",
			title: "Inner HTML",
		},
	],
};
