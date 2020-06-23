import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput component', () => {
  it('renders the component', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(<SearchInput onHandleInputChange={handleChange} />);

    const input = getByPlaceholderText('Search for users');

    expect(input).toBeInTheDocument();
  });

  it('fires onChange event', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(<SearchInput onHandleInputChange={handleChange} />);

    const input = getByPlaceholderText('Search for users') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test user name' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('test user name');
  });
});
