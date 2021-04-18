let mongoose = require('mongoose')

let listItemSchema = new mongoose.Schema({
    itemName: String,
    itemDescription: String
})

//DB will automatically pluralize ListItem
let ListItem = mongoose.model('ListItem', listItemSchema)

module.exports = ListItem