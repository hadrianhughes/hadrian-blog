import React from 'react';
import './CTA.scss';

const CTA = ({ label, onClick }) => (
  <button className="CTA" onClick={onClick}>{label}</button>
);

export default CTA;
