const express = require("express")
const mongoose = require("mongoose")
const app = express.Router()
const NotesModel = require('../models/NotesModel.js');

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        const newNote = new NotesModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        const notes = await NotesModel.find()
        res.status(200).send(notes)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        res.send({message: "Get Note By ID"})
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        const updateNote = await NotesModel.findByIdAndUpdate(req.params.noteid, req.body)
        res.status(201).send(updateNote)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async(req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        const deleteNote = await NotesModel.findByIdAndDelete(req.params.noteid)
        if(!deleteNote){
            res.status(400).send({message: "No Note to Delete"})
        }
        res.status(201).send(newNote)
    }
});


