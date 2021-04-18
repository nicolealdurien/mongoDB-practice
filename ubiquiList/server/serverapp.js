const express = require('express')
const serverapp = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const List = require('./models/list')
const PORT = 3000
let List1 = List
serverapp.use(bodyParser.json())

// connect to DB
mongoose.connect('mongodb://localhost:27017/listdb', {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(error) {
        console.log('Unable to connect to DB')
    } else {
        console.log('Connected to DB!')
    }
})



// INITIALIZED DB WITH FIRST ENTRY
// const list = new List({
//     name: 'Calorie Tracking',
//     description: 'Daily intake'
// })

// list.save((error, newList) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(newList)
//     }
// })

serverapp.post('/api/lists', async (req, res) => {

    const listName = req.body.listName
    const listDescription = req.body.listDescription

    let List = new List({
        listName: listName,
        listDescription: listDescription
    })

    let savedList = await List.save()

    if (savedList) {
        res.json(savedShoppingList)
    } else {
        res.status(500).json({message: 'Unable to save list!'})
    }
})


serverapp.listen(PORT, () => {
    console.log('On your mark, get set, LIST!')
})