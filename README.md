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

## Validación XSD

El XML generado se valida contra el archivo `src/domain/xml/xsd/factura-ingreso.xsd` antes de enviarse como respuesta.

Inicialmente se utilizó la librería `xsd-schema-validator`, la cual ejecuta la validación mediante un proceso externo basado en Java. Durante las pruebas en Windows con `ts-node-dev`, este proceso quedaba bloqueado y las peticiones en Postman permanecían cargando indefinidamente.

Para resolver este problema, se reemplazó la dependencia por `libxmljs2`, que permite:

- Leer el archivo XSD localmente.
- Parsear el XML generado.
- Validar el XML contra el esquema.
- Obtener los errores de validación cuando existan.

Este cambio eliminó la dependencia del proceso externo y permitió una validación más estable y confiable dentro del entorno Node.js.