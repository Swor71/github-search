import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ErrorComponent } from './ErrorComponent';

afterEach(cleanup);

describe('Error component', () => {
  it('renders the component when passed an Error object', () => {
    const testProps: Error = {
      message: 'test error message',
      name: 'test error name',
      stack: 'test error stack',
    };

    const { getByText } = render(<ErrorComponent error={testProps} />);

    const errorMessage = getByText(testProps.message);

    expect(errorMessage).toBeInTheDocument();
  });
});
