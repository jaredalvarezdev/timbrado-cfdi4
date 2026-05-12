// Este helper limpia el RFC que llega en el body por si viene con espacios o minúsculas
export function formatearRfc(rfc: string): string {
  return rfc.trim().toUpperCase();
}