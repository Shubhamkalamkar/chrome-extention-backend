const bookmarkController = require('../../controllers/bookmark/main.bookmark.controller')

const bookmarkRoute = require('express').Router()

bookmarkRoute.post('/create', bookmarkController.createBookmark)

module.exports = bookmarkRoute