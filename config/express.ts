import cors from 'cors';
import express from 'express';
import config from './server.config.json';

/**
 * creates Express app
 * @return { Express }
 */
export default function ExpressServer() {
  const app = express();
  app.use(express.json());

  const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
  app.listen(config.server.port, () => console.log(`Poll-service listening on http://localhost:${config.server.port}`));
  return app;
};
