import { IAppService } from './app.types';

export class AppService implements IAppService {
  getAppInfo() {
    return {
      message: 'App is running smoothly',
      status: 'healthy',
    };
  }
}
