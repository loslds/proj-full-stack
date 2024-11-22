import { Request, Response } from 'express';
import db from '../database';

export const getUsers = (req: Request, res: Response) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.json(results);
  });
};
