export type AppInfo = {
  message: string;
  status: string;
};

export interface IAppService {
  getAppInfo(): Promise<AppInfo> | AppInfo;
}
