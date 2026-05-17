import path from "path";

import { FacturaIngreso } from "../../domain/timbrado/factura-ingreso.model";
import { generarFacturaIngresoXml } from "../../domain/xml/generarFacturaIngresoXml";
import { validarXmlXsd } from "../../domain/xml/xsd/validarXmlXsd";
import { limpiarXml } from "../../shared/helpers/limpiarXml";

export async function generarXmlIngreso(
  factura: FacturaIngreso
): Promise<string> {

  const xml = generarFacturaIngresoXml(factura);

  const xmlLimpio = limpiarXml(xml);

  // ruta del esquema xsd
  const rutaXsd = path.resolve(
    __dirname,
    "../../domain/xml/xsd/factura-ingreso.xsd"
  );

  // validacion contra esquema
  await validarXmlXsd(xmlLimpio, rutaXsd);

  return xmlLimpio;
}