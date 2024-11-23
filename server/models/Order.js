const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Aguardando Pagamento', 'Enviado', 'Entregue'),
    defaultValue: 'Aguardando Pagamento',
  },
});

module.exports = Order;
