import { Request, Response } from 'express';
import db from '../database';

// Controlador para obter todas as empresas
export const getEmpresas = (req: Request, res: Response) => {
  db.query('SELECT * FROM empresas', (err, results) => {
    if (err) {
      console.error('Erro ao consultar empresas:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.json(results);
  });
};
