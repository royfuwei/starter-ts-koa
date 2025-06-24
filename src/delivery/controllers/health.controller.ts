import { HealthUseCase } from '@/modules/health/health.usecase';
import { Get, JsonController } from 'routing-controllers';
import { inject, injectable } from 'tsyringe';

@JsonController()
@injectable()
export class HealthController {
  constructor(
    @inject(HealthUseCase)
    private readonly healthUseCase: HealthUseCase, // Assuming HealthUseCase is defined and injected
  ) {}

  @Get('/health')
  getHealth() {
    return this.healthUseCase.getHealthStatus();
  }
}
