import { Receptor } from '../../timbrado/receptor.model';

export function validarReceptor(receptor: Receptor): string[] {
  const errores: string[] = [];

  if (!receptor) {
    errores.push('El receptor es obligatorio.');
    return errores;
  }

  if (!receptor.rfc) {
    errores.push('El RFC del receptor es obligatorio.');
  }

  if (!receptor.nombre) {
    errores.push('El nombre del receptor es obligatorio.');
  }

  if (!receptor.codigoPostal) {
    errores.push('El código postal del receptor es obligatorio.');
  }

  if (!receptor.usoCfdi) {
    errores.push('El uso del CFDI es obligatorio.');
  }

  return errores;
}