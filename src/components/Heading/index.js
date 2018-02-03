import React from 'react';

import s from './Heading.scss';

const Heading = ({ size, text }) => (
  size === 2 ?
    <h2 className={`${s.root} ${s.h2}`}>{ text }</h2>
  :
  size === 3 ?
    <h3 className={`${s.root} ${s.h3}`}>{ text }</h3>
  :
  size === 4 ?
    <h4 className={`${s.root} ${s.h4}`}>{ text }</h4>
  :
  size === 5 ?
    <h5 className={`${s.root} ${s.h5}`}>{ text }</h5>
  :
  size === 6 ?
    <h6 className={`${s.root} ${s.h6}`}>{ text }</h6>
  :
  ''
);

export default Heading;