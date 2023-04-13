const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Products Testing Routes" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products Routes" });
};

module.exports = { getAllProductsStatic, getAllProducts };
