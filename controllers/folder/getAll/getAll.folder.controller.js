const Folder = require("../../../models/folder.model");

const getAllFolder = (req, res, next) => {
    Folder.find()
        .then(folder => {
            res.json(folder);
        })
        .catch(error => {
            console.error('Error fetching Folder:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = getAllFolder;
