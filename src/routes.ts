import { Router } from 'express';
import { EstudantesController } from './controllers/EstudantesController';
import { CursoController } from './controllers/CursoController';
import { CursoEstudanteController } from './controllers/CursoEstudanteController';

const router = Router();

router.post('/estudantes', EstudantesController.create);
router.get('/estudantes', EstudantesController.list);
router.get('/estudantes/:id', EstudantesController.find);
router.delete('/estudantes/:id', EstudantesController.delete);
router.post('/curso', CursoController.create);
router.delete('/curso/:id', CursoController.delete);
router.post('/cursoEstudante', CursoEstudanteController.create);
router.delete('/cursoEstudante/:id', CursoEstudanteController.delete);


export default router;
