import { Request, Response } from "express";
import { validarFacturaEgreso } from "../../domain/validators/factura/validarFacturaEgreso";
import { FacturaEgreso } from "../../domain/timbrado/factura-egreso.model";
import { generarXmlEgreso } from "../../application/timbrado/generarXmlEgreso";
import { validarXmlXsd } from "../../domain/xml/xsd/validarXmlXsd";
import { formatearRfc } from "../../shared/helpers/formatearRfc";

// Controlador para crear factura de egreso
export const crearFacturaEgreso = async (
  req: Request,
  res: Response
) => {

  // Datos de la petición
  const factura = req.body as FacturaEgreso;

  // Formatear RFCs
  factura.emisor.rfc = formatearRfc(factura.emisor.rfc);
  factura.receptor.rfc = formatearRfc(factura.receptor.rfc);

  // Validación básica
  const errores = validarFacturaEgreso(factura);

  if (errores.length > 0) {
    return res.status(400).json({
      mensaje: "Error de validación",
      errores
    });
  }

  try {

    // Generar XML
    const xml = await generarXmlEgreso(factura);

    // Validar contra XSD
    const resultadoXsd = await validarXmlXsd(xml);

    if (!resultadoXsd.valido) {
      return res.status(400).json({
        mensaje: "XML inválido",
        error: resultadoXsd.error || resultadoXsd.errores
      });
    }

    // Respuesta OK
    return res.status(200).json({
      mensaje: "Factura generada correctamente",
      xml
    });

  } catch (error: any) {

    // Error interno
    return res.status(500).json({
      mensaje: "Error interno",
      error: error.message
    });
  }
};