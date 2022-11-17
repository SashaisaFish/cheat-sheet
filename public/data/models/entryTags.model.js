import { DataTypes, Model } from "sequelize";
import { db } from "../db/db.js";

class h4Tag extends Model {}
h4Tag.init(
	{
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

class pTag extends Model {}
pTag.init(
	{
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

class aTag extends Model {}
aTag.init(
	{
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

class imgTag extends Model {}
imgTag.init(
	{
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

export { h4Tag, pTag, aTag, imgTag };
