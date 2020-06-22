import { AxiosResponse } from 'axios';
import { UserData, Repository } from '../types/types';
import { RestApi } from './restApi';

export class GitHubApi {
  private http: RestApi;

  public constructor() {
    this.http = new RestApi({
      baseURL: 'https://api.github.com',
      timeout: 5000,
      headers: { Accept: 'application/vnd.github.v3+json' },
    });
  }

  public async fetchUserData(userName: string): Promise<UserData> {
    const userData: AxiosResponse<UserData> = await this.http.get<UserData>(`/users/${userName}`);

    return userData.data;
  }

  public async fetchUserRepositories(userName: string): Promise<Repository[]> {
    const userRepos: AxiosResponse<Repository[]> = await this.http.get<Repository[]>(`/users/${userName}/repos`);

    return userRepos.data;
  }
}
