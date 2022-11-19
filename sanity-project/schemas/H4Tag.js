export default {
	name: "H4Tag",
	type: "document",
	title: "<h4> Tag",
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
			name: "content",
			type: "string",
			title: "Inner Text",
		},
	],
};
