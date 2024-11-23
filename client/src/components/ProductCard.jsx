import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card style={{ margin: '1rem', width: '200px', backgroundColor: 'black' }}>
      <CardContent>
        <Typography variant="h5" style={{ color: 'white' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" style={{ color: 'white' }}>
          {product.description}
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
          R$ {product.price}
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: 'white', color: 'black', marginTop: '1rem' }}
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;