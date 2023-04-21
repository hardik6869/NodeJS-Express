const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide Email and Password", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const luckyNumer = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello, Wel-Come",
    secret: `Here is your authorized data, Your lucky number is ${luckyNumer}`,
  });
};

module.exports = { login, dashboard };
