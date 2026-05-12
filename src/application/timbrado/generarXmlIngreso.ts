import { FacturaIngreso } from '../../domain/timbrado/factura-ingreso.model';
import { generarFacturaIngresoXml } from '../../domain/xml/generarFacturaIngresoXml';

export function generarXmlIngreso(
  factura: FacturaIngreso
): string {

  const xml = generarFacturaIngresoXml(factura);

  return xml;

}