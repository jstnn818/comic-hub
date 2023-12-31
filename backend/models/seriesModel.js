const mongoose = require('mongoose')

const Schema = mongoose.Schema

const seriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    user_id: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        integer: true,
        default: 0
    },
    comments: [
        {
            username: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
        },
    ],
    chapters: [String]
}, { timestamps: true })

module.exports = mongoose.model('Series', seriesSchema)