const Folder = require("../../../models/folder.model");

const createFolder = (req, res, next) => {
    const data = req.body;
    if (!data.name) {
        res.json({ Message: "enter folder name" })
    }
    console.log(data)
    const newFolder = new Folder(data);

    newFolder.save()
        .then(folder => {
            res.status(200).json({ message: "Folder created successfully" });
        })
        .catch(err => {
            console.error("Error creating folder:", err);
            next("Error creating folder")
        });
};

module.exports = createFolder;
