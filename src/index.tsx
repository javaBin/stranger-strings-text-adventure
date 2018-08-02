import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import unregister from './registerServiceWorker';
import GameIntro from "./view/intro/GameIntro";

ReactDOM.render(
<GameIntro />,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker(); TODO add me back
unregister();
