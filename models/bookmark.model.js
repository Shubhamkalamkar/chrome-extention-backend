const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookmarkSchema = new Schema(
    {
        url: {
            type: String
        },
        email: {
            type: String
        },
        title: {
            type: String
        },
        tabIconUrl: {
            type: String
        },
        note: {
            type: String
        },
        folder: {
            type: String
        },
        userId: {
            type: String
        },
        timeStamp: {
            type: Date,
            default: new Date()
        },
        tags: {
            type: String
        }
    }
)

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark