import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Aqui você deve verificar o usuário no banco de dados
  if (username === 'admin' && password === '123456') {
    res.json({ message: 'Login bem-sucedido!', token: 'abc123' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
};

