const createFolder = require('./create/create.folder.controller')
const getAllFolder = require('./getAll/getAll.folder.controller')
const deleteFolder = require('./delete/delete.folder.controller')

const folderController = {
    createFolder,
    getAllFolder,
    deleteFolder
}

module.exports = folderController;