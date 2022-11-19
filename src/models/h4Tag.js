import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class H4Tag extends Model {}
H4Tag.init(
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

export { H4Tag };
