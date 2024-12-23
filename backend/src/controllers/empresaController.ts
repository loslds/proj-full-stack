import { Request, Response } from 'express';
import db from '../database';

// Obter todas as empresas
export const getEmpresas = (req: Request, res: Response) => {
  db.query('SELECT * FROM tb_empresa', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao obter empresas', details: err });
    }
    res.json(results);
  });
};

// Criar uma nova empresa
export const createEmpresa = async (req: Request, res: Response) => {
  const { nome, fantasia, id_pessoa } = req.body;

  if (!nome || !fantasia || !id_pessoa) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const query = 'INSERT INTO tb_empresa (nome, fantasia, id_pessoa) VALUES (?, ?, ?)';
  try {
    const [result]: any = await db.query(query, [nome, fantasia, id_pessoa]); // Use desestruturação
    const insertId = result.insertId; // Acesse o insertId no resultado
    res.json({ message: 'Empresa criada com sucesso', id: insertId });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar empresa', details: err });
  }
};

// Atualizar uma empresa
export const updateEmpresa = (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, fantasia, id_pessoa } = req.body;
  const query = 'UPDATE tb_empresa SET nome = ?, fantasia = ?, id_pessoa = ? WHERE id = ?';
  db.query(query, [nome, fantasia, id_pessoa, id], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao atualizar empresa', details: err });
    }
    res.json({ message: 'Empresa atualizada com sucesso' });
  });
};

// Excluir uma empresa
export const deleteEmpresa = (req: Request, res: Response) => {
  const { id } = req.params;
  db.query('DELETE FROM tb_empresa WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao excluir empresa', details: err });
    }
    res.json({ message: 'Empresa excluída com sucesso' });
  });
};
