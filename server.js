// import express
const express = require("express");
const favicon = require("serve-favicon");
// const seed
const { seed } = require("./public/db/seed.js");
// const routes
const { createRouter } = require("./public/routes/createRouter.js");

// translate __dirname
const path = require("path");
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// create app
const app = express();
// declare port
const port = 5000;

// serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// serve public resources
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
	"/public/models",
	express.static(path.join(__dirname, "public", "models"))
);

// serve static webpages
// index
app.use("/index", express.static(path.join(__dirname, "1-index-page")));
app.get("/", (req, res) => {
	res.redirect("/index");
});
// html
app.use(
	"/html",
	express.static(path.join(__dirname, "2-html-page"), {
		index: "html-page.html",
	})
);
// css
app.use(
	"/css",
	express.static(path.join(__dirname, "3-css-page"), {
		index: "css-page.html",
	})
);
// js
app.use(
	"/js",
	express.static(path.join(__dirname, "4-js-page"), { index: "js-page.html" })
);
// dom
app.use(
	"/react",
	express.static(path.join(__dirname, "5-react-page"), {
		index: "react-page.html",
	})
);
// other
app.use(
	"/create",
	express.static(path.join(__dirname, "6-create-page"), {
		index: "create-page.html",
	})
);

// set Routers
app.use("/create", createRouter);

// endpoint to seed database
app.get("/seed", async (req, res) => {
	await seed();
	res.status(201).send("Database reset!");
});

// listen
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});
