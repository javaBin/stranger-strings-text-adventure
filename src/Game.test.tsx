import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './Game';

(window as any).prototype.scrollIntoView = () => undefined;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});
