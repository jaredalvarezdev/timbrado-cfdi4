import { Request, Response } from 'express';
import { validarFacturaIngreso } from '../../domain/validators/factura/validarFacturaIngreso';
import { FacturaIngreso } from '../../domain/timbrado/factura-ingreso.model';
import { generarXmlIngreso } from '../../application/timbrado/generarXmlIngreso';
import { formatearRfc } from '../../shared/helpers/formatearRfc';

export const crearFacturaIngreso = async (
  req: Request,
  res: Response
) => {

  const factura = req.body as FacturaIngreso;

  // formateo basico de RFC
  factura.emisor.rfc =
    formatearRfc(factura.emisor.rfc);

  factura.receptor.rfc =
    formatearRfc(factura.receptor.rfc);

  // validaciones basicas
  const errores = validarFacturaIngreso(factura);

  if (errores.length > 0) {

    res.status(400).json({
      mensaje: 'Error de validación en la factura',
      errores: errores
    });

    return;
  }

  try {

    // generacion del xml
    const xml = await generarXmlIngreso(factura);

    res.status(200).json({
      mensaje: 'Factura generada correctamente',
      xml: xml
    });

  } catch (error: any) {

    res.status(400).json({
      mensaje: 'Error al validar XML',
      error: error.message
    });

  }
};