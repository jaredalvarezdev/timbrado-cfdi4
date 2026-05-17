import { FacturaIngreso } from '../timbrado/factura-ingreso.model';

export function generarFacturaIngresoXml(
  factura: FacturaIngreso
): string {

  let conceptosXml = '';

  for (const concepto of factura.conceptos) {

    conceptosXml += `
      <cfdi:Concepto
        ClaveProdServ="${concepto.claveProductoServicio}"
        Cantidad="${concepto.cantidad}"
        ClaveUnidad="${concepto.claveUnidad}"
        Descripcion="${concepto.descripcion}"
        Importe="${concepto.importe}"
      >
        <cfdi:Impuestos>
          <cfdi:Traslados>
            <cfdi:Traslado
              Impuesto="${concepto.impuesto.impuesto}"
              Importe="${concepto.impuesto.importe}"
            />
          </cfdi:Traslados>
        </cfdi:Impuestos>
      </cfdi:Concepto>
    `;
  }

  return `
    <cfdi:Comprobante
      xmlns:cfdi="http://www.sat.gob.mx/cfd/4"
      Version="4.0"
    >

      <cfdi:Emisor
        Rfc="${factura.emisor.rfc}"
        Nombre="${factura.emisor.nombre}"
        RegimenFiscal="${factura.emisor.regimenFiscal}"
      />

      <cfdi:Receptor
        Rfc="${factura.receptor.rfc}"
        Nombre="${factura.receptor.nombre}"
        UsoCFDI="${factura.receptor.usoCfdi}"
      />

      <cfdi:Conceptos>
        ${conceptosXml}
      </cfdi:Conceptos>

    </cfdi:Comprobante>
  `;
}