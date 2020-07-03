import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserDetails } from './UserDetails';
import { mockUserData } from '../../../mock/mockData';
import { StoreContext } from '../../../store/store';

afterEach(cleanup);

describe('UserDetails component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(
      <StoreContext.Provider value={{ ...StoreContext, userData: mockUserData, loading: false }}>
        <UserDetails />
      </StoreContext.Provider>,
    );

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper).toBeInTheDocument();
  });

  it('renders user avatar', () => {
    const { getByTestId } = render(
      <StoreContext.Provider value={{ ...StoreContext, userData: mockUserData, loading: false }}>
        <UserDetails />
      </StoreContext.Provider>,
    );

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper.firstChild).toBeInTheDocument();

    expect(avatarNameWrapper.firstChild).toHaveAttribute('src', mockUserData.avatar_url);
  });

  it('renders user name', () => {
    const { queryAllByTestId } = render(
      <StoreContext.Provider value={{ ...StoreContext, userData: mockUserData, loading: false }}>
        <UserDetails />
      </StoreContext.Provider>,
    );

    const userNameList = queryAllByTestId('user-name');

    expect(userNameList).toHaveLength(2);
  });

  it("renders empty user bio when it's null", () => {
    const { getByTestId } = render(
      <StoreContext.Provider value={{ ...StoreContext, userData: mockUserData, loading: false }}>
        <UserDetails />
      </StoreContext.Provider>,
    );

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper.nextSibling).toBeInTheDocument();

    expect(avatarNameWrapper.nextSibling).toHaveTextContent('');
  });
});
