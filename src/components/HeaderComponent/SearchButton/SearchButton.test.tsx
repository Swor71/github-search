import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { SearchButton } from './SearchButton';

afterEach(cleanup);

describe('SearchButton component', () => {
  it('renders the component', () => {
    const fn = jest.fn();

    const { getByRole } = render(<SearchButton onHandleSearch={() => fn()} />);

    const searchButton = getByRole('button', { name: 'Search' });

    expect(searchButton).toBeInTheDocument();
  });

  it('fires onClick event', () => {
    const fn = jest.fn();

    const { getByRole } = render(<SearchButton onHandleSearch={() => fn()} />);

    const searchButton = getByRole('button', { name: 'Search' });

    fireEvent.click(searchButton);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
