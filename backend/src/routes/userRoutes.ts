import { Router } from 'express';
import { getUsers } from '../controllers/userController';
import empresaRoutes from './empresaRoutes';

const router = Router();

// Rota para obter todos os usuários
router.get('/', getUsers);

router.use('/empresas', empresaRoutes);

export default router;

