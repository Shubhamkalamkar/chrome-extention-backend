const bookmarkController = require('../../controllers/bookmark/main.bookmark.controller')

const bookmarkRoute = require('express').Router()

bookmarkRoute.post('/create', bookmarkController.createBookmark)
bookmarkRoute.get('/getAll', bookmarkController.getAllBookmarks)

module.exports = bookmarkRoute