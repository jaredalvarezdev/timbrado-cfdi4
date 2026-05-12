import { Emisor } from '../../timbrado/emisor.model';

export function validarEmisor(emisor: Emisor): string[] {
  const errores: string[] = [];

  if (!emisor) {
    errores.push('El emisor es obligatorio.');
    return errores;
  }

  if (!emisor.rfc) {
    errores.push('El RFC del emisor es obligatorio.');
  }

  if (!emisor.nombre) {
    errores.push('El nombre del emisor es obligatorio.');
  }

  if (!emisor.codigoPostal) {
    errores.push('El código postal del emisor es obligatorio.');
  }

  if (!emisor.regimenFiscal) {
    errores.push('El régimen fiscal del emisor es obligatorio.');
  }

  return errores;
}