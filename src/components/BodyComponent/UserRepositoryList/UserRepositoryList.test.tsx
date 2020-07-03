import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserRepositoryList } from './UserRepositoryList';
import { mockRepositoryData } from '../../../mock/mockData';
import { StoreContext } from '../../../store/store';

afterEach(cleanup);

describe('UserRepositoryList component', () => {
  it('renders the component', () => {
    const { getByText } = render(
      <StoreContext.Provider value={{ ...StoreContext, userRepositories: mockRepositoryData, loading: false }}>
        <UserRepositoryList />
      </StoreContext.Provider>,
    );

    const repoListHeader = getByText('Top repositories');

    expect(repoListHeader).toBeInTheDocument();
  });

  it('renders list of three repositories', () => {
    const { queryAllByTestId } = render(
      <StoreContext.Provider value={{ ...StoreContext, userRepositories: mockRepositoryData, loading: false }}>
        <UserRepositoryList />
      </StoreContext.Provider>,
    );

    const repositoryList = queryAllByTestId('link');

    expect(repositoryList).toHaveLength(3);
  });
});
