import axios from 'axios';
import { UserData } from '../types/types';

export class GitHubAPI {
  private URL = 'https://api.github.com';

  public fetchUserData(userName: string): Promise<UserData> {
    const userData = axios
      .get(`${this.URL}/users/${userName}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })
      .then(res => res?.data)
      .catch(error => new Error(error));

    return userData;
  }
}
