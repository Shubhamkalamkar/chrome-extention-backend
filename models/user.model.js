const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: {
            type: String
        },
        password: {
            type: String
        },
        timeStamp: {
            type: Date,
            default: new Date()
        }
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User