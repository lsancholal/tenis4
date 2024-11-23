import React from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { getCartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  const cartItems = getCartItems();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  return (
    <Container className="py-8 bg-white text-black">
      <Typography variant="h3" component="h1" gutterBottom className="text-center font-semibold text-3xl text-black">
        Carrinho de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center">
          <Typography variant="body1" className="text-lg text-gray-500">Seu carrinho está vazio.</Typography>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white text-black shadow-lg rounded-lg p-4 flex items-center space-x-4 hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-gray-200 rounded-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <Typography variant="h6" className="text-lg font-semibold text-black">{item.name}</Typography>
                <Typography variant="body2" className="text-gray-600">R$ {item.price.toFixed(2)}</Typography>
                <div className="flex items-center space-x-4 mt-2">
                  <TextField
                    type="number"
                    label="Quantidade"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    size="small"
                    className="w-24"
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: '#FFFFFF',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#888888',
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    style={{ borderColor: '#333333', color: '#333333' }} 
                    onClick={() => handleRemoveItem(item.id)}
                    size="small"
                    className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition"
                  >
                    Remover
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#444444', color: 'white' }} 
                  className="text-sm"
                >
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <Typography variant="h6" className="text-xl font-semibold text-white">Resumo do Carrinho</Typography>
          <div className="flex justify-between py-2">
            <Typography variant="body1" className="text-gray-400">Total</Typography>
            <Typography variant="body1" className="text-white">R$ {getTotal().toFixed(2)}</Typography>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/checkout">
              <Button variant="contained" style={{ backgroundColor: '#444444', color: 'white' }} size="large" className="w-full">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;