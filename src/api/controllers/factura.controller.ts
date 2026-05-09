import { Request, Response } from 'express';

export const crearFacturaIngreso = (
  req: Request,
  res: Response
) => {

  console.log(req.body);

  res.status(200).json({
    mensaje: 'Factura recibida correctamente',
    data: req.body
  });

};