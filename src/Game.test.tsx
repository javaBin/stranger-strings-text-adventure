import * as React from 'react';
import * as ReactDOM from 'react-dom';

(global as any).gtag = () => undefined;

import Game from './Game';

(window as any).HTMLElement.prototype.scrollIntoView = () => undefined;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});
