import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class RestApi {
  private api: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.api = axios.create(config);
  }

  public async get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config);
  }
}
