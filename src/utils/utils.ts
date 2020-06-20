import { GITHUB_API_URL } from '../consts/consts';

export const getUserRepositoriesByStarsDesc = (userName: string): string => {
  return `${GITHUB_API_URL}/repositories?q=user:${userName}&sort=stars&order=desc`;
};
