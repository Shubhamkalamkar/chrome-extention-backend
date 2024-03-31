const Bookmark = require("../../../models/bookmark.model");

const deleteBookmark = (req, res, next) => {
    const id = req.params.id;
    Bookmark.deleteOne({ _id: id })
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(200).json({ message: "Bookmark deleted successfully" });
            } else {
                res.status(404).json({ error: "Bookmark not found" });
            }
        })
        .catch(error => {
            console.error('Error deleting Bookmark:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = deleteBookmark;
