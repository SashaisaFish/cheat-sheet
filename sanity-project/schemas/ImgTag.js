export default {
	name: "ImgTag",
	type: "document",
	title: "<img> Tag",
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
			name: "src",
			type: "string",
			title: "Image Src",
		},
		{
			name: "alt",
			type: "string",
			title: "Alt Text",
		},
	],
};
