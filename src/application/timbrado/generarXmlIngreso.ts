import { FacturaIngreso } from '../../domain/timbrado/factura-ingreso.model';
import { generarFacturaIngresoXml } from '../../domain/xml/generarFacturaIngresoXml';

import { limpiarXml } from '../../shared/helpers/limpiarXml';

export function generarXmlIngreso(
  factura: FacturaIngreso
): string {

  const xml = generarFacturaIngresoXml(factura);

  return limpiarXml(xml);

}