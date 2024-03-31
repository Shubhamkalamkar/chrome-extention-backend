const bookmarkRoute = require('./bookmark/bookmark.route')

const mainRoute = require('express').Router();

mainRoute.use('/bookmark',bookmarkRoute)

module.exports = mainRoute;