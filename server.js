const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const server = next({ dev });
const handle = server.getRequestHandler();




dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 4000;
server.prepare().then(() => {
	app.get("*", (req, res) => {
		return handle(req, res);
	});

	app.listen(4000, () => {
		console.log(`App running on port ${4000}....`);
	});
});
