import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { SearchButton } from './SearchButton';

afterEach(cleanup);

describe('SearchButton component', () => {
  it('renders the component', () => {
    const fn = jest.fn();

    const { getByText } = render(<SearchButton onHandleSearch={() => fn()} />);

    expect(getByText('Search')).toBeInTheDocument();
  });

  it('fires onClick event', () => {
    const fn = jest.fn();

    const { getByText } = render(<SearchButton onHandleSearch={() => fn()} />);

    const button = getByText('Search');

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
