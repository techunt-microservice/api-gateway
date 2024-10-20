import express from 'express';
import dotenv from 'dotenv';

import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'http://localhost:8001',
  })
);

app.use(
  '/api/products',
  createProxyMiddleware({
    target: 'http://localhost:8002',
  })
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
