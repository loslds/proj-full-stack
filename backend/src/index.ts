
import express from 'express';
import cors from 'cors';
import useRoutes from './routes/userRoutes'; // Importa as rotas principais


const app = express();
const port = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // URL do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Rotas
app.use('/api', useRoutes); // Agora todas as rotas serão prefixadas com /api

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
