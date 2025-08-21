import express from 'express';
import corsMiddleware from './middleware/cors';
import timeoutMiddleware from './middleware/timeout';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(timeoutMiddleware);

app.use(routes);

app.use(errorHandler);

export default app;