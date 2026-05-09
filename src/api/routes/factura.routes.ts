import { Router } from 'express';
import { crearFacturaIngreso } from '../controllers/factura.controller';

const router = Router();

router.post('/ingreso', crearFacturaIngreso);

export default router;