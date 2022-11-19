import Sequelize from "sequelize";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Sequelize({
	host: "localhost",
	dialect: "sqlite",
	storage: path.join(__dirname, "entry.sqlite"),
	logging: false,
});

// db.authenticate()
// 	.then(() => {
// 		console.log("Connection has been established successfully.");
// 	})
// 	.catch((error) => {
// 		console.error("Unable to connect to the database: ", error);
// 	});

export { db };
