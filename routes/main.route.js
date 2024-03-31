const Login = require('../controllers/auth/login.auth.controller');
const CreateUser = require('../controllers/user/create/create.user.controller');
const bookmarkRoute = require('./bookmark/bookmark.route');
const folderRoute = require('./folder/folder.route');

const mainRoute = require('express').Router();

mainRoute.use('/bookmark',bookmarkRoute)
mainRoute.use('/folder',folderRoute)
mainRoute.use('/user/create',CreateUser)
mainRoute.use('/auth/login',Login)

module.exports = mainRoute;