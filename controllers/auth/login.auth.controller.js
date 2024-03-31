const User = require("../../models/user.model");

const Login = (req, res, next) => {
    
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (user.password !== password) {
                return res.status(401).json({ message: "Invalid password" });
            }
            return res.status(200).json({ message: "Login successful",email:user.email });
        })
        .catch(error => {
            console.error("Login error:", error);
            return res.status(500).json({ message: "Internal server error" });
        });
};

module.exports = Login;
