import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GameIntro from "./view/intro/GameIntro";

ReactDOM.render(
<GameIntro />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
