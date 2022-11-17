import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class imgTag extends Model {}
imgTag.init(
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
		src: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		alt: {
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

export { imgTag };
