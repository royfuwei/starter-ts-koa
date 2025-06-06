import demoUtils from '@/common/utils/demo.utils';

export class DemoUseCase {
  getDemoValue(): string {
    const data = demoUtils.getDemoValue();
    return data;
  }
}
