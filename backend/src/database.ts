import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jrbordados',
});

export default db;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456', // Atualize com sua senha
//   database: 'jrbordados',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
// db.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao MySQL:', err);
//     process.exit(1); // Finaliza o processo em caso de erro
//   }
//   console.log('Conectado ao MySQL!');
// });
//export default db;
