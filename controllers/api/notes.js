const Note = require("../../models/note");

module.exports = {
  index,
  createNote,
  show,
  edit: editNote,
  update: updateNote
};

async function updateNote(req, res) {
  try {
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedNote) {
          return res.json(notes)
      }
      res.redirect(`/notes/${updatedNote._id}`);
  } catch (err) {
      console.error(err);
      res .json('/notes');
  }
}

async function editNote(req, res){
    const note = await Note.findById(req.params.id)
    res.json(note);
    }
  

async function index(req, res) {
  try {
    const notes = await Note.find({}).sort('date');
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function show(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(404).json({ error: "Cannot find note" });
  }
}

async function createNote(req, res) {
  try {
    const newNote = await Note.create({
      text: req.body.text, 
      createdAt: req.body.createdAt, 
      userId: req.body.userId
    });

    res.status(201).json(newNote);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}


