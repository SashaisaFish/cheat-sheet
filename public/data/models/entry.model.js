const { DataTypes, Model } = require("sequelize");
const { db } = require("../db/db.js");

class Entry extends Model {}

Entry.init(
	{
		topic: {
			type: DataTypes.ENUM("html", "css", "js", "react"),
			allowNull: false,
		},
		subtopic: {
			type: DataTypes.STRING,
		},
		elementId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		classes: {
			type: DataTypes.STRING,
			defaultValue: "info-article",
		},
	},
	{
		sequelize: db,
	}
);

module.exports = { Entry };
