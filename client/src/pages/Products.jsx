import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();  

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: 'Tênis Jordan Series Masculino',
          description: 'Inspirado nas batalhas de Mike com seu irmão mais velho Larry no quintal, o Jordan Series faz referência à rivalidade dos irmãos lendários em todo o design.',
          price: 759.99,
          image: '/img/1.jpg',
        },
        {
          id: 2,
          name: 'Air Force 1 x Slam Jam',
          description:  'Seu ícone de estilo de basquete favorito acaba de receber uma reforma italiana. Em parceria com a Slam Jam, esta abordagem artesanal do AF1 tem o selo de aprovação da potência do streetwear italiano',
          price: 1424.99,
          image: '/img/2.jpg',
        },
        {
          id: 3,
          name:  'Tênis Air Jordan 1 Mid Masculino',
          description: 'Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.',
          price: 1139.99,
          image: '/img/3.jpg',
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <Container className="py-8 bg-black">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-3xl font-semibold text-white mb-12">
        Todos os Produtos
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="bg-black text-black shadow-lg rounded-lg hover:shadow-2xl transition transform hover:scale-105">
              <CardContent>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-600"
                />
                <Typography 
                  variant="h5" 
                  className="font-semibold text-black"  
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  className="text-black mt-2"  
                >
                  {product.description}
                </Typography>
                <Typography 
                  variant="h6" 
                  className="text-black mt-2" 
                >
                  R$ {product.price.toFixed(2)}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  className="mt-4"
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    '&:hover': { backgroundColor: '#555', color: 'white' }, 
                  }}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;