// import express
import express from "express";
// create app
const app = express();
// declare port
const port = 5000;

// set up static webpages
app.use("/index/", express.static("1-index-page"));
app.use("/html/", express.static("2-html-page"));
app.use("/css/", express.static("3-css-page"));
app.use("/js/", express.static("4-js-page"));
app.use("/dom/", express.static("5-dom-page"));
app.use("/other/", express.static("6-other-page"));

// listen
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});
