const Bookmark = require("../../../models/bookmark.model");

const getAllBookmarks = (req, res, next) => {
    Bookmark.find()
        .then(bookmarks => {
            res.json(bookmarks);
        })
        .catch(error => {
            console.error('Error fetching bookmarks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = getAllBookmarks;
