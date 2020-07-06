import { AxiosResponse } from 'axios';
import { User, GitHubSearchResponse } from '../types/types';
import { RestApi } from './restApi';
import { memoize } from '../utils/utils';

interface GHApi {
  fetchUserData: (name: string) => Promise<User>;
  fetchUserRepositories: (name: string) => Promise<GitHubSearchResponse>;
}

export function GitHubApi(): GHApi {
  const http = new RestApi({
    baseURL: 'https://api.github.com',
    timeout: 5000,
    headers: { Accept: 'application/vnd.github.v3+json' },
  });

  async function fetchUserData(userName: string): Promise<User> {
    const userData: AxiosResponse<User> = await http.get<User>(`/users/${userName}`);

    return userData.data;
  }

  async function fetchUserRepositories(userName: string): Promise<GitHubSearchResponse> {
    const userRepos: AxiosResponse<GitHubSearchResponse> = await http.get<GitHubSearchResponse>(
      `search/repositories?q=user:${userName}+sort:stars`,
    );

    return userRepos.data;
  }

  return { fetchUserData: memoize(fetchUserData), fetchUserRepositories: memoize(fetchUserRepositories) };
}
