let mongoose = require('mongoose');
// let ListItem = require('./listItem')

let listSchema = mongoose.Schema({
    listName: String,
    listDescription: String,
    listItems: [{itemName: String, itemDescription: String}]
})

//DB will automatically pluralize List
let List = mongoose.model('List', listSchema)

module.exports = List