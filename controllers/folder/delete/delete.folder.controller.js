const Folder = require("../../../models/folder.model");

const deleteFolder = (req, res, next) => {
    const id = req.params.id;
    Folder.deleteOne({ _id: id })
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(200).json({ message: "Folder deleted successfully" });
            } else {
                res.status(404).json({ error: "Folder not found" });
            }
        })
        .catch(error => {
            console.error('Error deleting folder:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = deleteFolder;
