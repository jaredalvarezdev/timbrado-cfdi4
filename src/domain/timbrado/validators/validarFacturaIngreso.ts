import { FacturaIngreso } from './factura-ingreso.model';

export function validarFacturaIngreso(factura: FacturaIngreso): string[] {
  const errores: string[] = [];

  if (!factura.emisor) {
    errores.push('El emisor es obligatorio.');
  } else {
    if (!factura.emisor.rfc) {
      errores.push('El RFC del emisor es obligatorio.');
    }

    if (!factura.emisor.nombre) {
      errores.push('El nombre del emisor es obligatorio.');
    }

    if (!factura.emisor.codigoPostal) {
      errores.push('El código postal del emisor es obligatorio.');
    }

    if (!factura.emisor.regimenFiscal) {
      errores.push('El régimen fiscal del emisor es obligatorio.');
    }
  }

  if (!factura.receptor) {
    errores.push('El receptor es obligatorio.');
  } else {
    if (!factura.receptor.rfc) {
      errores.push('El RFC del receptor es obligatorio.');
    }

    if (!factura.receptor.nombre) {
      errores.push('El nombre del receptor es obligatorio.');
    }

    if (!factura.receptor.codigoPostal) {
      errores.push('El código postal del receptor es obligatorio.');
    }

    if (!factura.receptor.usoCfdi) {
      errores.push('El uso del CFDI es obligatorio.');
    }
  }

  if (!factura.conceptos || factura.conceptos.length === 0) {
    errores.push('Debe existir al menos un concepto.');
  } else {
    for (let i = 0; i < factura.conceptos.length; i++) {
      const concepto = factura.conceptos[i];

      if (!concepto) {
        continue;
      }

      if (!concepto.claveProductoServicio) {
        errores.push(
          'La clave de producto o servicio es obligatoria en el concepto ' +
            (i + 1) +
            '.'
        );
      }

      if (!concepto.cantidad || concepto.cantidad <= 0) {
        errores.push(
          'La cantidad debe ser mayor a cero en el concepto ' +
            (i + 1) +
            '.'
        );
      }

      if (!concepto.claveUnidad) {
        errores.push(
          'La clave de unidad es obligatoria en el concepto ' +
            (i + 1) +
            '.'
        );
      }

      if (!concepto.descripcion) {
        errores.push(
          'La descripción es obligatoria en el concepto ' +
            (i + 1) +
            '.'
        );
      }

      if (!concepto.importe || concepto.importe <= 0) {
        errores.push(
          'El importe debe ser mayor a cero en el concepto ' +
            (i + 1) +
            '.'
        );
      }

      if (!concepto.impuesto) {
        errores.push(
          'El impuesto es obligatorio en el concepto ' + (i + 1) + '.'
        );
      } else {
        if (!concepto.impuesto.impuesto) {
          errores.push(
            'La clave del impuesto es obligatoria en el concepto ' +
              (i + 1) +
              '.'
          );
        }

        if (
          concepto.impuesto.importe === undefined ||
          concepto.impuesto.importe === null
        ) {
          errores.push(
            'El importe del impuesto es obligatorio en el concepto ' +
              (i + 1) +
              '.'
          );
        }
      }
    }
  }

  return errores;
}