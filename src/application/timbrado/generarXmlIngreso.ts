import path from "path";
import { FacturaIngreso } from "../../domain/timbrado/factura-ingreso.model";
import { generarFacturaIngresoXml } from "../../domain/xml/generarFacturaIngresoXml";
import { validarXmlXsd } from "../../domain/xml/xsd/validarXmlXsd";
import { limpiarXml } from "../../shared/helpers/limpiarXml";

export async function generarXmlIngreso(
  factura: FacturaIngreso
): Promise<string> {

  // generamos xml
  const xml = generarFacturaIngresoXml(factura);

  // limpiamos xml
  const xmlLimpio = limpiarXml(xml);

  // ruta del xsd
  const rutaXsd = path.resolve(
    __dirname,
    "../../domain/xml/xsd/factura-ingreso.xsd"
  );

  // validamos xml contra xsd
  await validarXmlXsd(xmlLimpio, rutaXsd);

  return xmlLimpio;
}