import { RoutingControllersOptions, useContainer } from 'routing-controllers';
import { initKoaApp } from '@/koaApp';
import { iocAdapter } from '@/ioc/iocAdapter';
import * as _indexControllers from '@/delivery/controllers';
import { container } from 'tsyringe';
import { IocRegistryApp } from '@/ioc/ioc.register.app';

export function server() {
  new IocRegistryApp(container);

  useContainer(iocAdapter);

  const controllers = Object.values(_indexControllers).values();

  const routingControllerOptions: RoutingControllersOptions = {
    defaultErrorHandler: false,
    classTransformer: true,
    validation: true,
    controllers: [...controllers],
  };

  const app = initKoaApp(routingControllerOptions);
  const host = process.env.HOST ?? 'localhost';
  const port = Number(process.env.PORT) || 3000;
  const httpServer = app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
  });
  return {
    app,
    httpServer,
  };
}
