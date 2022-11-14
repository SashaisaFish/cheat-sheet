// import express
const express = require("express");
// import path
const path = require("path");
// create app
const app = express();
// declare port
const port = 5000;

// serve public resources
app.use("/public", express.static(path.join(__dirname, "public")));

// serve static webpages
// index
app.use("/index", express.static(path.join(__dirname, "1-index-page")));
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
	"/dom",
	express.static(path.join(__dirname, "5-dom-page"), {
		index: "dom-page.html",
	})
);
// other
app.use(
	"/other",
	express.static(path.join(__dirname, "6-other-page"), {
		index: "other-page.html",
	})
);

// listen
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});
