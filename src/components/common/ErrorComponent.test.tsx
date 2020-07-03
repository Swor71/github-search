import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ErrorComponent } from './ErrorComponent';
import { StoreContext } from '../../store/store';

afterEach(cleanup);

describe('Error component', () => {
  it('renders the component when passed an Error object', () => {
    const testProps: Error = {
      message: 'test error message',
      name: 'test error name',
      stack: 'test error stack',
    };

    const { getByText } = render(
      <StoreContext.Provider value={{ ...StoreContext, error: testProps, loading: false }}>
        <ErrorComponent />
      </StoreContext.Provider>,
    );

    const errorMessage = getByText(testProps.message);

    expect(errorMessage).toBeInTheDocument();
  });
});
