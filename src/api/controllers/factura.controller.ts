import { Request, Response } from 'express';
import { FacturaIngreso } from '../../domain/timbrado/factura-ingreso.model';

export const crearFacturaIngreso = (
  req: Request,
  res: Response
) => {

  const factura = req.body as FacturaIngreso;

  console.log(factura);

  res.status(200).json({
    mensaje: 'Factura recibida correctamente',
    data: factura
  });

};