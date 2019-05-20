import React from 'react';
import {render} from 'react-dom';

import './styles/base.less';
import './styles/prism.css';

import Page from './page';

render(<Page />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
