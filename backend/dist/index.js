"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const app = (0, express_1.default)();
const port = 3001;
// Conexão com MySQL
const db = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'jrbordados',
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
