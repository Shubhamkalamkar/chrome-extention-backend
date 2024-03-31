const folderController = require('../../controllers/folder/main.folder.controller')

const folderRoute = require('express').Router()

folderRoute.post('/create', folderController.createFolder)
folderRoute.get('/getAll', folderController.getAllFolder)

module.exports = folderRoute