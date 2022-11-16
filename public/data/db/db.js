import {Sequelize} from 'sequelize'
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, entry.sqlite),
    logging: false
})

export {db}