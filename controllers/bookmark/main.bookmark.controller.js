const createBookmark = require('./create/create.bookmark.controller')
const getAllBookmarks = require('./getAll/getAll.bookmarks.controller')

const bookmarkController = {
    createBookmark,
    getAllBookmarks
}

module.exports = bookmarkController;