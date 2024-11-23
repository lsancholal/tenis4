const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body; // Aqui, você deve lidar com produtos
    const order = await Order.create({ userId });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pedido' });
  }
};

// Adicione métodos para listar pedidos e outros conforme necessário
