import { DataTypes, Model } from "sequelize";
import { db } from "../db/db";

class h4Tag extends Model {}
h4Tag.init(
    {
        elementId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classes: {
            type: DataTypes.ARRAY,
            defaultValue: ["info-entry"]
        }

    },
    {
        sequelize: db,
        timestamps: false
    }
)

class pTag extends Model {}
pTag.init(
	{
		elementId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		classes: {
			type: DataTypes.ARRAY,
			defaultValue: ["info-entry"],
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
			allowNull: false,
			unique: true,
		},
		href: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		innerHtml: {},
		classes: {
			type: DataTypes.ARRAY,
			defaultValue: ["info-entry"],
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
			allowNull: false,
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
			type: DataTypes.ARRAY,
			defaultValue: ["info-entry"],
		},
	},
	{
		sequelize: db,
		timestamps: false,
	}
);

export {h4Tag, pTag, aTag, imgTag}
