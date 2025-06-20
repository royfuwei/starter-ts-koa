import { getDemoValue } from '@/common/utils';

export class DemoUseCase {
  getDemoValue(): string {
    const data = getDemoValue();
    return data;
  }
}
