import React from 'react';
import { render } from '@testing-library/react';
import Square from './square';

test('renders Square component', () => {
  const { container } = render(<Square />);
  expect(container).toBeInTheDocument();
});
