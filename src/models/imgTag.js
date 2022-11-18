import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class ImgTag extends Model {}
ImgTag.init(
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

export { ImgTag };
