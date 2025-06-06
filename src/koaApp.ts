import bodyParser from '@koa/bodyparser';
import cors from '@koa/cors';
import koa from 'koa';
import { RoutingControllersOptions, useKoaServer } from 'routing-controllers';

export function initKoaApp(routingControllerOptions: RoutingControllersOptions = {}) {
  const app = new koa();
  useKoaServer(app, routingControllerOptions);

  app.use(
    cors({
      origin(ctx) {
        return ctx.get('Origin') || '*';
      },
    }),
  );

  app.use(
    bodyParser({
      formLimit: '100mb',
      jsonLimit: '100mb',
      textLimit: '100mb',
      encoding: 'utf-8',
    }),
  );

  return app;
}
