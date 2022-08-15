import express from 'express';
import dotenv from 'dotenv';
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
const cors = require('cors');
const fetch = require('node-fetch');

type Config = {
  port: number;
  apiUrl: string;
  apiKey: string;
};

dotenv.config({ path: './.env' });

const config: Config = {
  port: (process.env.PORT as unknown as number) || 4000,
  apiUrl: process.env.NASA_API || '',
  apiKey: process.env.API_KEY || '',
};

const Photo = z.object({
  img_src: z.string(),
  id: z.number(),
  camera: z.object({ full_name: z.string() }),
});

export type PhotoType = z.infer<typeof Photo>;

const appRouter = trpc.router().query('photos', {
  input: z.string().optional(),
  async resolve({ input }) {
    const url =
      input === 'all'
        ? `${config.apiUrl}?sol=1000&api_key=${config.apiKey}`
        : `${config.apiUrl}?sol=1000&camera=${input}&page=1&api_key=${config.apiKey}`;
    const response = await fetch(url);
    const { photos } = await response.json();
    return Photo.array().parse(photos);
  },
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.listen(config.port, () => {
  console.log(`🚀 Server ready at http://localhost:${config.port}`);
});
