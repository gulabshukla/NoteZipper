const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')

const app = express();


app.get('/', (req,res)=>{
 res.send("successfully running")
})

app.get('/api/notes', (req,res)=>{
    res.send(notes)
})

app.get('/api/notes/:id', (req,res)=>{
     const note = notes.find((n) =>n._id === req.params.id);
     res.send(note)
})

app.listen(5000, console.log("PORT 5000 is in use"))
