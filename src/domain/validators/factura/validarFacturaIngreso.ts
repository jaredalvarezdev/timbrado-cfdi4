import { FacturaIngreso } from '../../timbrado/factura-ingreso.model';
import { validarEmisor } from './validarEmisor';
import { validarReceptor } from './validarReceptor';
import { validarConcepto } from './validarConcepto';

export function validarFacturaIngreso(
    factura: FacturaIngreso
): string[] {

    const errores: string[] = [];

    // Validar que exista la factura
    if (!factura) {
        errores.push('La factura es obligatoria.');
        return errores;
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
                // El ! indica que el concepto sí existe
                ...validarConcepto(
                    factura.conceptos[i]!,
                    i + 1
                )
            );
        }
    }

    return errores;
}