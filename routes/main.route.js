const bookmarkRoute = require('./bookmark/bookmark.route');
const folderRoute = require('./folder/folder.route');

const mainRoute = require('express').Router();

mainRoute.use('/bookmark',bookmarkRoute)
mainRoute.use('/folder',folderRoute)

module.exports = mainRoute;