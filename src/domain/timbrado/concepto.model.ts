import { Impuesto } from './impuesto.model';

export interface Concepto {
  claveProductoServicio: string;
  cantidad: number;
  claveUnidad: string;
  descripcion: string;
  importe: number;
  impuesto: Impuesto;
}