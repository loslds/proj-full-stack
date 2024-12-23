import mysql from 'mysql2';
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456', // Atualize com sua senha
  database: 'jrbordados',
});
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1); // Finaliza o processo em caso de erro
  }
  console.log('Conectado ao MySQL!');
});
export default db;
