const createFolder = require('./create/create.folder.controller')
const getAllFolder = require('./getAll/getAll.folder.controller')

const folderController = {
    createFolder,
    getAllFolder
}

module.exports = folderController;