import fs from "fs";
import path from "path";
import libxmljs from "libxmljs2";

// función para validar un XML usando un archivo XSD
export async function validarXmlXsd(
  xml: string,
  nombreXsd: string
): Promise<any> {

  try {

    // obtenemos la ruta absoluta del archivo XSD
    // __dirname representa la carpeta actual
    const rutaXsd = path.resolve(
      __dirname,
      nombreXsd
    );

    // leemos el contenido del archivo XSD
    const contenidoXsd =
      fs.readFileSync(rutaXsd, "utf8");

    // convertimos el XML string a documento XML
    const xmlDoc =
      libxmljs.parseXml(xml);

    // convertimos el XSD string a documento XML
    const xsdDoc =
      libxmljs.parseXml(contenidoXsd);

    // validamos el XML usando el XSD
    const esValido =
      xmlDoc.validate(xsdDoc);

    // si el XML NO es válido
    if (!esValido) {

      // retornamos errores encontrados
      return {
        valido: false,

        // validationErrors contiene detalles del error
        errores: xmlDoc.validationErrors
      };
    }

    // si todo salió bien
    return {
      valido: true
    };

  } catch (error: any) {

    // error inesperado del servidor
    // por ejemplo:
    // - archivo XSD no encontrado
    // - XML mal formado
    // - problema interno
    return {
      valido: false,
      error: error.message
    };

  }

}