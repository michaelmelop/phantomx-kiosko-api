import app from './app';
import { PORT } from './config/env';
import { AppDataSource } from './config/database';

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });