import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class aTag extends Model {}
aTag.init(
	{
		parentId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		elementId: {
			type: DataTypes.STRING,
			unique: true,
		},
		href: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		innerHtml: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		classes: {
			type: DataTypes.STRING,
			defaultValue: "info-entry",
		},
	},
	{
		sequelize: db,
		timestamps: false,
	}
);

export { aTag };
