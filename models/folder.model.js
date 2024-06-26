const mongoose = require('mongoose')
const Schema = mongoose.Schema

const folderSchema = new Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        timeStamp: {
            type: Date,
            default: new Date()
        }
    }
)

const Folder = mongoose.model("Folder", folderSchema);
module.exports = Folder