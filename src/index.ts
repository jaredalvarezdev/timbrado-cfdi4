import express from 'express';
import facturaRoutes from './api/routes/factura.routes';

const app = express();

app.use(express.json());

app.use('/api/facturas', facturaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});