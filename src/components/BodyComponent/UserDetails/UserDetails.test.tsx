import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserDetails } from './UserDetails';
import { mockUserData } from '../../../mock/mockData';

afterEach(cleanup);

describe('UserDetails component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<UserDetails userData={mockUserData} />);

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper).toBeInTheDocument();
  });

  it('renders user avatar', () => {
    const { getByTestId } = render(<UserDetails userData={mockUserData} />);

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper.firstChild).toBeInTheDocument();

    expect(avatarNameWrapper.firstChild).toHaveAttribute('src', mockUserData.avatar_url);
  });

  it('renders user name', () => {
    const { queryAllByTestId } = render(<UserDetails userData={mockUserData} />);

    const userNameList = queryAllByTestId('user-name');

    expect(userNameList).toHaveLength(2);
  });

  it("renders empty user bio when it's null", () => {
    const { getByTestId } = render(<UserDetails userData={mockUserData} />);

    const avatarNameWrapper = getByTestId('avatar-name-wrapper');

    expect(avatarNameWrapper.nextSibling).toBeInTheDocument();

    expect(avatarNameWrapper.nextSibling).toHaveTextContent('');
  });
});
