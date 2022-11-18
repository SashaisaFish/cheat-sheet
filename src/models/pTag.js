import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class PTag extends Model {}
PTag.init(
	{
		parentId: {
			type: DataTypes.STRING,
			unique: true,
			references: {
				model: "Entries",
				key: "elementId",
			},
		},
		childId: {
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

export { PTag };
