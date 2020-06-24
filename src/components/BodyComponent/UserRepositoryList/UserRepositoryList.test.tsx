import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserRepositoryList } from './UserRepositoryList';
import { mockRepositoryData } from '../../../mock/mockData';

afterEach(cleanup);

describe('UserRepositoryList component', () => {
  it('renders the component', () => {
    const { getByText } = render(<UserRepositoryList repositories={mockRepositoryData} />);

    const repoListHeader = getByText('Top repositories');

    expect(repoListHeader).toBeInTheDocument();
  });

  it('renders list of three repositories', () => {
    const { queryAllByTestId } = render(<UserRepositoryList repositories={mockRepositoryData} />);

    const repositoryList = queryAllByTestId('link');

    expect(repositoryList).toHaveLength(3);
  });
});
