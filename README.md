# MVP Timbrado XML CFDI
Base inicial de proyecto backend en Node.js para recibir XML CFDI, validar estructura tecnica basica y preparar el flujo de timbrado simulado.

Backend en Node.js + TypeScript para recibir datos de una factura CFDI de ingreso, validar su estructura y generar un XML estructurado.

## Tecnologías

- Node.js >= 18
- TypeScript 6
- Express 5

## Instalación

```bash
npm install
```

## Correr en desarrollo

```bash
npm run dev
```
El servidor corre en `http://localhost:3000`

El flag `--respawn` hace que el servidor se reinicie automáticamente cada vez que guardas un archivo.

## Endpoint disponible
```POST /api/facturas/ingreso
```

Ver ejemplos completos en `examples/factura-ingreso-ejemplos.md`

## Estructura
```text
src/
  api/
    routes/
    controllers/
  application/
    timbrado/
  domain/
    xml/
    timbrado/
    validators/
  infrastructure/
    logs/
  shared/
    helpers/
    responses/
    errors/
  config/
  index.ts
```

## Helpers disponibles
| Helper | Función |
|---|---|
| `formatearRfc` | Normaliza RFC quitando espacios y convirtiendo a mayúsculas |
| `limpiarXml` | Elimina espacios y saltos innecesarios del XML generado |

## Flujo de la petición
```
POST /api/facturas/ingreso
        ↓
  Controller
        ↓
  Helpers (formatearRfc, limpiarXml)
        ↓
  Validators (emisor, receptor, conceptos)
        ↓
  generarFacturaIngresoXml
        ↓
  Respuesta JSON con el XML
```

## Alcance actual

- Validación de estructura CFDI
- Generación de XML CFDI 4.0
- Normalización de datos de entrada
- Conexión con PAC
- Timbrado oficial
- Base de datos
- Autenticación
- Certificados digitales
- SOAP
- Docker
- Colas

## Decisiones pendientes

- Limite maximo de tamaño XML.
- Nivel de validacion XML minima.
- Politica de logs para XML completo o solo metadata.