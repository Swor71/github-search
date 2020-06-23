// import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SearchButton } from './SearchButton';

afterEach(cleanup);

describe('SearchButton component', () => {
  test('renders the component', () => {
    const fn = jest.fn();

    const { getByText } = render(<SearchButton onHandleSearch={() => fn()} />);

    expect(getByText('Search')).toBeInTheDocument();
  });
});
