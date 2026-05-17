import validator from "xsd-schema-validator";

// funcion para validar xml contra xsd
export const validarXmlXsd = async (
  xml: string,
  rutaXsd: string
) => {

  return new Promise((resolve, reject) => {

    // usamos "as any" para evitar problemas de typings
    (validator.validateXML as any)(

      xml,
      rutaXsd,

      (error: any, result: any) => {

        if (error) {
          reject(error);
          return;
        }

        resolve(result);

      }

    );

  });

};