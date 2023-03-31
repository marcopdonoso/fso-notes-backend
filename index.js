const { json, response } = require("express");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Note = require("./models/note");

const app = express();

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

morgan.token("requestBody", (req, res) => JSON.stringify(req.body));

app.use(
	morgan(
		":method :url :status :res[content-length] - :response-time ms :requestBody"
	)
);

app.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
	Note.find({}).then((notes) => {
		response.json(notes);
	});
});

app.get("/api/notes/:id", (request, response) => {
	Note.findById(request.params.id).then((note) => {
		response.json(note);
	});
});

app.delete("/api/notes/:id", (request, response) => {
	const id = Number(request.params.id);
	notes = notes.filter((note) => note.id !== id);

	response.status(204).end();
});

app.post("/api/notes", (request, response) => {
	const body = request.body;

	if (!body.content) {
		return response.status(400).json({
			error: "content missing",
		});
	}

	const note = new Note({
		content: body.content,
		important: body.important || false,
		date: new Date(),
	});

	note.save().then((savedNote) => response.json(savedNote));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
