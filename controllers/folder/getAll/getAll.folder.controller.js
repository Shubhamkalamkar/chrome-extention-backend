const Folder = require("../../../models/folder.model");

const getAllFolder = (req, res, next) => {
    let { email } = req.body
    Folder.find({ email: email })
        .then(folder => {
            res.json(folder);
        })
        .catch(error => {
            console.error('Error fetching Folder:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = getAllFolder;
