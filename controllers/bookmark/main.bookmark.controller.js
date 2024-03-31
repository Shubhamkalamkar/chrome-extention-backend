const createBookmark = require('./create/create.bookmark.controller')
const getAllBookmarks = require('./getAll/getAll.bookmarks.controller')
const getByfolder = require('./getByFolderName/getByfoldername.bookmark.controller')
const deleteBookmark = require('./delete/delete.bookmark.controller')

const bookmarkController = {
    createBookmark,
    getAllBookmarks,
    getByfolder,
    deleteBookmark
}

module.exports = bookmarkController;