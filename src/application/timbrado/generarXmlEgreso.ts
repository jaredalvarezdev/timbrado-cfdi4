import { FacturaEgreso } from "../../domain/timbrado/factura-egreso.model";
import { generarFacturaEgresoXml } from "../../domain/xml/generarFacturaEgresoXml";
import { limpiarXml } from "../../shared/helpers/limpiarXml";

// función para generar el XML de una factura egreso
export async function generarXmlEgreso(
  factura: FacturaEgreso
): Promise<string> {

  // generamos el XML usando los datos de la factura
  const xml = generarFacturaEgresoXml(factura);

  // limpiamos espacios o saltos innecesarios
  const xmlLimpio = limpiarXml(xml);

  // regresamos el XML limpio
  return xmlLimpio;
}