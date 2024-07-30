const Note = require('../models/noteModel');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
