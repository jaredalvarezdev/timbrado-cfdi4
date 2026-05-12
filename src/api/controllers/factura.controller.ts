import { validarFacturaIngreso } from '../../domain/validators/factura/validarFacturaIngreso';
import { Request, Response } from 'express';
import { FacturaIngreso } from '../../domain/timbrado/factura-ingreso.model';

export const crearFacturaIngreso = (
  req: Request,
  res: Response
) => {

  const factura = req.body as FacturaIngreso;

  const errores = validarFacturaIngreso(factura);

  if (errores.length > 0) {
    res.status(400).json({
      mensaje: 'Errores de validación',
      errores: errores
    });
    return;
  }
  
  console.log(factura);

  res.status(200).json({
    mensaje: 'Factura recibida correctamente',
    data: factura
  });

};