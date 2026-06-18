import { Router } from 'express';
import { crearFacturaIngreso } from '../controllers/factura-ingreso.controller';
import { crearFacturaEgreso } from '../controllers/factura-egreso.controller';

const router = Router();

router.post('/ingreso', crearFacturaIngreso);
router.post('/egreso', crearFacturaEgreso);

export default router;