import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const AddProduct = ({ onAdd }) => {
  const { isAdmin } = useAuth(); 
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), 
      name,
      description,
      price: parseFloat(price),
    };
    onAdd(newProduct); 
    setName('');
    setDescription('');
    setPrice('');
  };

  if (!isAdmin()) {
    return <Typography variant="h6" className="text-center text-black">Acesso Negado: Somente administradores podem adicionar produtos.</Typography>;
  }

  return (
    <Container className="bg-white text-black p-8 rounded-lg shadow-lg">
      <Typography variant="h4" component="h1" gutterBottom className="text-center font-bold text-3xl text-black mb-6">
        Adicionar Produto
      </Typography>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <TextField
          label="Nome do Produto"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white text-black border-2 border-gray-400 focus:ring-2 focus:ring-gray-600 rounded-md"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          InputProps={{
            style: { color: '#333' },
          }}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="bg-white text-black border-2 border-gray-400 focus:ring-2 focus:ring-gray-600 rounded-md"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          InputProps={{
            style: { color: '#333' },
          }}
        />
        <TextField
          label="Preço"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="bg-white text-black border-2 border-gray-400 focus:ring-2 focus:ring-gray-600 rounded-md"
          InputLabelProps={{
            style: { color: '#333' },
          }}
          InputProps={{
            style: { color: '#333' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="bg-black hover:bg-gray-900 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
        >
          Adicionar
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;