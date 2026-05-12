import { Concepto } from '../../timbrado/concepto.model';

export function validarConcepto(
  concepto: Concepto,
  index: number
): string[] {

  const errores: string[] = [];

  if (!concepto.claveProductoServicio) {
    errores.push(
      'La clave de producto o servicio es obligatoria en el concepto ' +
      index +
      '.'
    );
  }

  if (!concepto.cantidad || concepto.cantidad <= 0) {
    errores.push(
      'La cantidad debe ser mayor a cero en el concepto ' +
      index +
      '.'
    );
  }

  if (!concepto.claveUnidad) {
    errores.push(
      'La clave de unidad es obligatoria en el concepto ' +
      index +
      '.'
    );
  }

  if (!concepto.descripcion) {
    errores.push(
      'La descripción es obligatoria en el concepto ' +
      index +
      '.'
    );
  }

  if (!concepto.importe || concepto.importe <= 0) {
    errores.push(
      'El importe debe ser mayor a cero en el concepto ' +
      index +
      '.'
    );
  }

  if (!concepto.impuesto) {
    errores.push(
      'El impuesto es obligatorio en el concepto ' +
      index +
      '.'
    );
  } else {

    if (!concepto.impuesto.impuesto) {
      errores.push(
        'La clave del impuesto es obligatoria en el concepto ' +
        index +
        '.'
      );
    }

    if (
      concepto.impuesto.importe === undefined ||
      concepto.impuesto.importe === null
    ) {
      errores.push(
        'El importe del impuesto es obligatorio en el concepto ' +
        index +
        '.'
      );
    }

  }

  return errores;
}