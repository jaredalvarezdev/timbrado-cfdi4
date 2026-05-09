# MVP Timbrado XML CFDI

Base inicial de proyecto backend en Node.js para recibir XML CFDI, validar estructura tecnica basica y preparar el flujo de timbrado simulado.

## Alcance actual

- No hay conexion PAC.
- No hay SOAP.
- No hay certificados.
- No hay Docker.
- No hay base de datos.
- No hay autenticacion.
- No hay colas.

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
  infrastructure/
    logs/
  shared/
    responses/
    errors/
  config/
```

## Decisiones pendientes

- Framework HTTP.
- Nombre del endpoint POST.
- Formato definitivo del request.
- Limite maximo de tamano XML.
- Nivel de validacion XML minima.
- Politica de logs para XML completo o solo metadata.
