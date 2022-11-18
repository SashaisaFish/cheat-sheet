import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class ATag extends Model {}
ATag.init(
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

export { ATag };
