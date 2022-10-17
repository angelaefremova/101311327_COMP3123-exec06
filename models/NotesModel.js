const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        require: true,
        lowercase: true
    },
    noteDescription: String,
    priority: { type: String, enum: ['LOW', 'HIGH', 'MEDIUM'] },
    dateAdded: Date,
    dateUpdated: Date
})

module.exports = mongoose.model("note", noteSchema)

/*
{
    "noteTitle": "To-Do",
    "noteDescription": "Assignment, quiz",
    "priority": "LOW",
    "dateAdded": "10-12-2022",
    "dateUpdated": "10-15-2022"
}
*/