const login = async (req, res) => {
  res.send("Fake LOgin/Register & SignUp Route");
};

const dashboard = async (req, res) => {
  const luckyNumer = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello, Wel-Come",
    secret: `Here is your authorized data, Your lucky number is ${luckyNumer}`,
  });
};

module.exports = { login, dashboard };
