# Ejemplos de Factura Ingreso

## Endpoint
-- POST http://localhost:3000/api/facturas/ingreso --

## Funcionalidad

Este endpoint:

- Valida datos de emisor, receptor y conceptos.
- Genera el XML de la factura.
- Formatea RFCs automáticamente.
- Limpia el XML antes de enviarlo.
- Valida el XML generado contra un archivo XSD.
---

## Ejemplo correcto
```json
{
  "emisor": {
    "rfc": " aaa010101aaa ",
    "nombre": "Empresa SA",
    "codigoPostal": "37000",
    "regimenFiscal": "601"
  },
  "receptor": {
    "rfc": " xaxx010101000 ",
    "nombre": "Publico General",
    "codigoPostal": "37000",
    "usoCfdi": "G03"
  },
  "conceptos": [
    {
      "claveProductoServicio": "10101504",
      "cantidad": 1,
      "claveUnidad": "H87",
      "descripcion": "Producto prueba",
      "importe": 100,
      "impuesto": {
        "impuesto": "002",
        "importe": 16
      }
    }
  ]
}
```

### Respuesta esperada
```json
{
  "mensaje": "Factura generada correctamente",
  "xml": "<cfdi:Comprobante Version=\"4.0\"> ..."
}
```

---
## Ejemplo con errores
```json
{
  "emisor": {
    "rfc": "",
    "nombre": "",
    "codigoPostal": "",
    "regimenFiscal": ""
  },
  "receptor": {
    "rfc": "",
    "nombre": "",
    "codigoPostal": "",
    "usoCfdi": ""
  },
  "conceptos": []
}
```

### Validaciones esperadas

- RFC obligatorio.
- Nombre obligatorio.
- Código postal obligatorio.
- Uso CFDI obligatorio.
- Debe existir al menos un concepto.

### Respuesta esperada
```json
{
  "mensaje": "Error de validación en la factura",
  "errores": [
    "El RFC del emisor es obligatorio.",
    "Debe existir al menos un concepto."
  ]
}
```