import { Request, Response } from 'express';
import db from '../database';

// Obter todas as empresas
export const getEmpresas = (req: Request, res: Response) => {
  db.query('SELECT * FROM tb_pessoa', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao obter empresas', details: err });
    }
    res.json(results);
  });
};

// Criar uma nova empresa
export const createPessoa = async (req: Request, res: Response) => {
  const { descr, sigla } = req.body;

  if (!descr || !sigla) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const query = 'INSERT INTO tb_pessoa (descr, sigla) VALUES (?, ?)';
  try {
    const [result]: any = await db.query(query, [descr, sigla]); // Use desestruturação
    const insertId = result.insertId; // Acesse o insertId no resultado
    res.json({ message: 'Pessoa criada com sucesso', id: insertId });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pessoa', details: err });
  }
};

// Atualizar uma empresa
export const updatePessoa = (req: Request, res: Response) => {
  const { id } = req.params;
  const { descr, sigla } = req.body;
  const query = 'UPDATE tb_pessoa SET descr = ?, sigla = ? WHERE id = ?';
  db.query(query, [descr, sigla], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao atualizar pessoa', details: err });
    }
    res.json({ message: 'Pessoa atualizada com sucesso' });
  });
};

// Excluir uma empresa
export const deletePessoa = (req: Request, res: Response) => {
  const { id } = req.params;
  db.query('DELETE FROM tb_pessoa WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao excluir pessoa', details: err });
    }
    res.json({ message: 'Pessoa excluída com sucesso' });
  });
};
