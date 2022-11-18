export default {
	name: "PTag",
	type: "document",
	title: "<p> Tag",
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
			name: "content",
			type: "string",
			title: "Inner Text",
		},
	],
};
