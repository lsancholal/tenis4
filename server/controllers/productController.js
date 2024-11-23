const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const product = await Product.create({ name, description, price, stock, category });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
};

// Adicione métodos adicionais para editar e deletar produtos conforme necessário
