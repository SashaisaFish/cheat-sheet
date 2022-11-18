export default {
	name: "ATag",
	type: "document",
	title: "<a> Tag",
	fields: [
		{
			name: "parentId",
			type: "string",
			title: "Parent ID",
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
