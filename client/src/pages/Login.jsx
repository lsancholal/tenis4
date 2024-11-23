import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Container maxWidth="xs" className="bg-white text-black p-8 rounded-lg shadow-lg">
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-black mb-6">
          Bem-vindo de volta!
        </Typography>

        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Entrar
          </Button>

          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-600">
              Não tem uma conta?{' '}
              <a href="/signup" className="text-black hover:text-gray-900 font-semibold">
                Cadastre-se
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;