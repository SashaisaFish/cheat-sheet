import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

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

export { Entry };
