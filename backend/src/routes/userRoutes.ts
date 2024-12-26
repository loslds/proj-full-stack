 import { Router } from 'express';

 import userRoutes from './userRoutes'; // Importe outras rotas conforme necessário
 //import authRoutes from './authRoutes';
 //import acessosRoutes from './acessoRoutes';// acesso do usuario
 import  pessoasRoutes from './pessoaRoutes';
 
 const router = Router();
 //router.use('/', acessosRoutes); // Rotas relacionadas a usuários
//router.use('/', authRoutes); // Rotas relacionadas à autenticação
 router.use('/', pessoasRoutes);

 export default router;
