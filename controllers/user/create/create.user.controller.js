const User = require("../../../models/user.model");

const CreateUser = (req, res, next) => {
    const data = req.body;
    console.log(data)
    const newUser = new User(data);

    newUser.save()
        .then(user => {
            res.status(200).json({ message: "User created successfully" });
        })
        .catch(err => {
            console.error("Error creating User:", err);
            next("Error creating User")
        });
};

module.exports = CreateUser;
