const Bookmark = require("../../../models/bookmark.model");

const createBookmark = (req, res, next) => {
    const data = req.body;
console.log(data)
    const newBookmark = new Bookmark(data);

    newBookmark.save()
        .then(bookmark => {
            res.status(200).json({message:"Bookmark created successfully"});
        })
        .catch(err => {
            console.error("Error creating bookmark:", err);
            next("Error creating bookmark")
        });
};

module.exports = createBookmark;
