import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class pTag extends Model {}
pTag.init(
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
		text: {
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

export { pTag };
