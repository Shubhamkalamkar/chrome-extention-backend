const bookmarkController = require('../../controllers/bookmark/main.bookmark.controller')

const bookmarkRoute = require('express').Router()

bookmarkRoute.post('/create', bookmarkController.createBookmark)
bookmarkRoute.post('/getAll', bookmarkController.getAllBookmarks)
bookmarkRoute.post('/getbyfolder', bookmarkController.getByfolder)

module.exports = bookmarkRoute