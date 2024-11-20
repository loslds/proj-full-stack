
import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3001;

// Conexão com MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'nome_do_banco',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
