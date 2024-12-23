import { Router } from 'express';
import { getEmpresas } from '../controllers/EmpresaController';

const router = Router();

// Rota para obter todas as empresas
router.get('/', getEmpresas);

export default router;

