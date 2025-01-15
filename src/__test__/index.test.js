import React from 'react';
import { render } from '@testing-library/react';

import SvgComponent from './example-asset.svg';

function TestComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <SvgComponent foo="bar" style={{ height: '100px' }} />
    </div>
  );
}

test('TestComponent should render svg child with correct props', () => {
  const { container } = render(<TestComponent />);
  expect(container).toMatchSnapshot();
});
