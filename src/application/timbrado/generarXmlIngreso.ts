import { FacturaIngreso } from "../../domain/timbrado/factura-ingreso.model";
import { generarFacturaIngresoXml } from "../../domain/xml/generarFacturaIngresoXml";
import { limpiarXml } from "../../shared/helpers/limpiarXml";

// función para generar el XML de una factura ingreso
export async function generarXmlIngreso(
  factura: FacturaIngreso
): Promise<string> {

  // generamos el XML usando los datos de la factura
  const xml = generarFacturaIngresoXml(factura);

  // limpiamos espacios o saltos innecesarios
  const xmlLimpio = limpiarXml(xml);

  // regresamos el XML limpio
  return xmlLimpio;
}