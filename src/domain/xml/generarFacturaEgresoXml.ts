import { FacturaEgreso } from "../timbrado/factura-egreso.model";

export function generarFacturaEgresoXml(
  factura: FacturaEgreso
): string {

  // construimos conceptos en XML
  let conceptosXml = "";

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

  // XML final
  // Si se cambia el nombre de algun elemento o atributo requerido,
  // el XSD marcara el XML como invalido aunque el JSON sea correcto.
  return `
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Comprobante
  xmlns:cfdi="http://www.sat.gob.mx/cfd/4"
  Version="4.0"
  TipoDeComprobante="E"
  UuidRelacionado="${factura.uuidRelacionado}">

  <cfdi:Emisor
    Rfc="${factura.emisor.rfc}"
    Nombre="${factura.emisor.nombre}"
    RegimenFiscal="${factura.emisor.regimenFiscal}"
  />

   <cfdi:Receptor
    Rfc="${factura.receptor.rfc}"
    Nombre="${factura.receptor.nombre}"
    DomicilioFiscalReceptor="${factura.receptor.codigoPostal}"
    RegimenFiscalReceptor="${factura.receptor.regimenFiscal}"
    UsoCFDI="${factura.receptor.usoCfdi}"
  />

  <cfdi:Conceptos>
    ${conceptosXml}
  </cfdi:Conceptos>

</cfdi:Comprobante>
  `;
}