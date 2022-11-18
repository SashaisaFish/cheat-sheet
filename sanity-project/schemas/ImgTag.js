export default {
	name: "ImgTag",
	type: "document",
	title: "<img> Tag",
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
