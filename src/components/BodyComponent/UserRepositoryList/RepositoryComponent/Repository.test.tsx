import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { RepositoryComponent } from './Repository';

afterEach(cleanup);

describe('UserRepository component', () => {
  const mockProps = {
    repositoryLink: 'https://testpropslink',
    repositoryName: 'test props name',
    repositoryStars: 1,
  };

  it('renders the component', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<RepositoryComponent {...mockProps} />);

    const link = getByTestId('link');

    expect(link).toBeInTheDocument();
  });

  it('checks for href attribute', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<RepositoryComponent {...mockProps} />);

    const link = getByTestId('link');

    expect(link).toHaveAttribute('href', 'https://testpropslink');
  });

  it('checks for repository name', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<RepositoryComponent {...mockProps} />);

    const link = getByTestId('link');

    expect(link.firstChild).toHaveTextContent('test props name');
  });

  it('checks for number of stars', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<RepositoryComponent {...mockProps} />);

    const link = getByTestId('link');

    expect(link.lastChild).toHaveTextContent('1');
  });
});
