import { IAppService } from './app.types';

export class App2Service implements IAppService {
  getAppInfo() {
    return {
      message: 'App2 is running smoothly',
      status: 'healthy',
    };
  }
}
