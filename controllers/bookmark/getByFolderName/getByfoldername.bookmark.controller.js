const Bookmark = require("../../../models/bookmark.model");

const getByfolder = (req, res, next) => {
    // let folder = req.params.name;
    let {folder, email} = req.body
    Bookmark.find({ folder: folder, email:email })
        .then(bookmarks => {
            res.json(bookmarks);
        })
        .catch(error => {
            console.error('Error fetching bookmarks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = getByfolder;
