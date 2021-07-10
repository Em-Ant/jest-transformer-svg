import React from 'react';
import renderer from 'react-test-renderer';

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
  const component = renderer.create(<TestComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
