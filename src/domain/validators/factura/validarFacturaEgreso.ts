import { FacturaEgreso } from '../../timbrado/factura-egreso.model';
import { validarEmisor } from './validarEmisor';
import { validarReceptor } from './validarReceptor';
import { validarConcepto } from './validarConcepto';

export function validarFacturaEgreso(
    factura: FacturaEgreso
): string[] {
    const errores: string[] = [];

    // Validar que exista la factura
    if (!factura) {
        errores.push('La factura es obligatoria.');
        return errores;
    }

    // Validar el UUID de la factura de ingreso relacionada
    if (!factura.uuidRelacionado) {
        errores.push('El UUID de la factura relacionada es obligatorio.');
    }

    // Validar emisor
    errores.push(
        ...validarEmisor(factura.emisor)
    );

    // Validar receptor
    errores.push(
        ...validarReceptor(factura.receptor)
    );

    // Validar conceptos
    if (!factura.conceptos || factura.conceptos.length === 0) {
        errores.push(
            'Debe existir al menos un concepto.'
        );
    } else {
        for (let i = 0; i < factura.conceptos.length; i++) {
            errores.push(
                // El ! indica que el concepto si existe
                ...validarConcepto(
                    factura.conceptos[i]!,
                    i + 1
                )
            );
        }
    }

    return errores;
}