import { INJECT_SVC_APP_SERVICE } from '@/ioc/ioc.register.app';
import { IAppService } from '@/modules/app/app.types';
import { Get, JsonController } from 'routing-controllers';
import { inject, injectable } from 'tsyringe';

@JsonController('/app')
@injectable()
export class AppController {
  constructor(
    @inject(INJECT_SVC_APP_SERVICE)
    private readonly appService: IAppService, // Replace 'any' with the actual type of your service
  ) {}
  // This is a placeholder for the AppController.
  // You can add methods here to handle requests.
  // For example, you can create a method to return a welcome message.

  @Get()
  getApp() {
    return this.appService.getAppInfo();
  }

  @Get('/error')
  getError() {
    throw new Error('This is a test error from the App Controller.');
  }
}
