const createBookmark = require('./create/create.bookmark.controller')
const getAllBookmarks = require('./getAll/getAll.bookmarks.controller')
const getByfolder = require('./getByFolderName/getByfoldername.bookmark.controller')

const bookmarkController = {
    createBookmark,
    getAllBookmarks,
    getByfolder
}

module.exports = bookmarkController;