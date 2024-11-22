
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
const port = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes); // Rotas relacionadas a usuários
app.use('/api/auth', authRoutes); // Rotas relacionadas à autenticação

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
