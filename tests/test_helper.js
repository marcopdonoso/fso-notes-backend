const Note = require('../models/note')

const initialNotes = [
	{
		content: 'HTML is easy',
		date: new Date(),
		important: false,
	},
	{
		content: 'Browser can execute only Javascript',
		date: new Date(),
		important: true,
	},
]

const nonExistingId = async () => {
	const note = new Note({ content: 'willremovethissoon', date: new Date() })
	await note.save()
	await note.deleteOne()

	return note._id.toString()
}

const notesInDB = async () => {
	const notes = await Note.find({})
	return notes.map(note => note.toJSON())
}

module.exports = {
	initialNotes,
	nonExistingId,
	notesInDB,
}
