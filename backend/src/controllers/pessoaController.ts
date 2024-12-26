import { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import db from '../database';

export const getPessoas = async (req: Request, res: Response) => {
  const query = 'SELECT * FROM tb_pessoa';
  try {
    // Use o pool para realizar consultas diretamente
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter pessoas', details: err });
  }
};

export const createPessoa = async (req: Request, res: Response): Promise<void> => {
  const { descr, sigla } = req.body;

  // Verifica se os campos obrigatórios estão presentes
  if (!descr || !sigla) {
    res.status(400).json({ error: 'Campos obrigatórios faltando' });
    return; // Apenas retorna o fluxo da função, sem valor
  }

  const query = 'INSERT INTO tb_pessoa (descr, sigla) VALUES (?, ?)';
  try {
    const [result] = await db.query<ResultSetHeader>(query, [descr, sigla]);

    // Obtém o ID inserido
    const insertId = result.insertId;

    res.status(201).json({ message: 'Pessoa criada com sucesso', id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar pessoa', details: err });
  }
};
// Obter todas as pessoas
//export const getPessoas = (req: Request, res: Response) => {
//  db.query('SELECT * FROM tb_pessoa', (err, results) =>{
//    if (err) {
//      return res.status(500).json({ error: 'Erro ao obter pessoas', details: err });
//    };
//    res.json(results);
//  });
//};
// // Criar uma nova pessoa
// export const createPessoa = async (req: Request, res: Response) => {
//   const { descr, sigla } = req.body;

//   if (!descr || !sigla) {
//     return res.status(400).json({ error: 'Campos obrigatórios faltando' });
//   };

//   const query = 'INSERT INTO tb_pessoa (descr, sigla) VALUES (?, ?)';
//   try {
//     const [result]: any = await db.query(query, [descr, sigla]); // Use desestruturação
//     const insertId = result.insertId; // Acesse o insertId no resultado
//     res.json({ message: 'Pessoa criada com sucesso', id: insertId });
//   } catch (err) {
//     res.status(500).json({ error: 'Erro ao criar pessoa', details: err });
//   };
// };

// // Atualizar uma pessoa
// export const updatePessoa = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { descr, sigla } = req.body;
//   const query = 'UPDATE tb_pessoa SET descr = ?, sigla = ? WHERE id = ?';
//   db.query(query, [descr, sigla], (err) => {
//     if (err) {
//       return res.status(500).json({ error: 'Erro ao atualizar pessoa', details: err });
//     };
//     res.json({ message: 'Pessoa atualizada com sucesso' });
//   });
// };

// // Excluir uma pessoa
// export const deletePessoa = (req: Request, res: Response) => {
//   const { id } = req.params;
//   db.query('DELETE FROM tb_pessoa WHERE id = ?', [id], (err) => {
//     if (err) {
//       return res.status(500).json({ error: 'Erro ao excluir pessoa', details: err });
//     };
//     res.json({ message: 'Pessoa excluída com sucesso' });
//   });
// };
