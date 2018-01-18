import React from 'react';
import { render } from 'react-dom';

import CTA from './components/CTA';

render(
  <CTA label="Example" onClick={() => { console.log('Clicked'); }} />,
  document.getElementById('root')
);
