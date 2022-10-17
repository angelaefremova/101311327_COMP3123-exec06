const express = require("express")
const mongoose = require("mongoose")
const app = express.Router()
const NotesModel = require('../models/NotesModel.js');

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    try{
        const newNote = new NotesModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note)
    } catch(error){
        res.status(400).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    try{
        const notes = await NotesModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    res.send({message: "Get Note By ID"})
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    try{
        const updateNote = await NotesModel.findByIdAndUpdate(req.params.noteid, req.body)
        res.status(201).send(updateNote)
    } catch(error){
        res.status(400).send(error)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async(req, res) => {
    try{
        const deleteNote = await NotesModel.findByIdAndDelete(req.params.noteid)
        if(!deleteNote){
            res.status(400).send({message: "No Note to Delete"})
        }
        res.status(201).send(newNote)
    } catch(error){
        res.status(400).send(error)
    }
});



