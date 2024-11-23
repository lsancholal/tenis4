import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, CircularProgress } from '@mui/material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);

      navigate('/login');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Container maxWidth="xs" className="bg-white text-black p-8 rounded-lg shadow-lg">
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-black mb-6">
          Crie sua Conta
        </Typography>

        <form onSubmit={handleSignup} className="space-y-4">
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white text-black border-2 border-gray-600 focus:ring-2 focus:ring-black rounded-md"
            InputLabelProps={{
              style: { color: '#000' }, // Cor da label
            }}
            InputProps={{
              style: { color: '#000' }, // Cor do texto
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black border-2 border-gray-600 focus:ring-2 focus:ring-black rounded-md"
            InputLabelProps={{
              style: { color: '#000' }, // Cor da label
            }}
            InputProps={{
              style: { color: '#000' }, // Cor do texto
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
            className="bg-white text-black border-2 border-gray-600 focus:ring-2 focus:ring-black rounded-md"
            InputLabelProps={{
              style: { color: '#000' }, // Cor da label
            }}
            InputProps={{
              style: { color: '#000' }, // Cor do texto
            }}
          />

          {error && (
            <Typography variant="body2" color="error" align="center" className="mt-2">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-black text-white hover:bg-gray-800 font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar'}
          </Button>

          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-600">
              Já tem uma conta?{' '}
              <a href="/login" className="text-black hover:text-gray-800 font-semibold">
                Faça login
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;