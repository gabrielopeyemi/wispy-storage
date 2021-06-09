import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addToWispy } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<addToWispy />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
