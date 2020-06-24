import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import { HeaderComponent } from './HeaderComponent';

afterEach(cleanup);

describe('HeaderComponent component', () => {
  const testProps = {
    onHandleSetUserData: jest.fn(),
    onHandleSetUserRepos: jest.fn(),
    onHandleError: jest.fn(),
  };

  it('renders the component with input field and search button', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByRole, getByPlaceholderText } = render(<HeaderComponent {...testProps} />);

    const searchButton = getByRole('button', { name: 'Search' });
    const input = getByPlaceholderText('Search for users');

    expect(searchButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('fires onHandleSetUserData when clicked button with input being populated', async () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByRole, getByPlaceholderText } = render(<HeaderComponent {...testProps} />);

    const searchButton = getByRole('button', { name: 'Search' });
    const input = getByPlaceholderText('Search for users');

    fireEvent.change(input, { target: { value: 'swor71' } });
    fireEvent.click(searchButton);

    await wait(() => expect(testProps.onHandleSetUserData).toHaveBeenCalledTimes(1));
  });

  it('fires onHandleSetUserRepos when clicked button with input being populated', async () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByRole, getByPlaceholderText } = render(<HeaderComponent {...testProps} />);

    const searchButton = getByRole('button', { name: 'Search' });
    const input = getByPlaceholderText('Search for users');

    fireEvent.change(input, { target: { value: 'swor71' } });
    fireEvent.click(searchButton);

    await wait(() => expect(testProps.onHandleSetUserRepos).toHaveBeenCalledTimes(1));
  });
});
