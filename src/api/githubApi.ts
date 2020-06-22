import { AxiosResponse } from 'axios';
import { UserData, GitHubSearchResponse } from '../types/types';
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

  public async fetchUserRepositories(userName: string): Promise<GitHubSearchResponse> {
    const userRepos: AxiosResponse<GitHubSearchResponse> = await this.http.get<GitHubSearchResponse>(
      `search/repositories?q=user:${userName}+sort:stars`,
    );

    return userRepos.data;
  }
}
