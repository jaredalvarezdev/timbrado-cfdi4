import { Emisor } from './emisor.model';
import { Receptor } from './receptor.model';
import { Concepto } from './concepto.model';

export interface FacturaIngreso {
  emisor: Emisor;
  receptor: Receptor;
  conceptos: Concepto[];
}