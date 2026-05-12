// Limpia espacios y saltos de línea innecesarios del XML
export function limpiarXml(xml: string): string {
  return xml.replace(/\s+/g, ' ')  // reemplaza espacios múltiples por uno solo
    .trim();                // quita espacios al inicio y al final
}