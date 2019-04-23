import React from 'react';
import './TheFilter.css';

const TheFilter = ({searchfield, searchChange}) => {
  return (
    <div className="filter">I'm Feeling like <input type="search" placeholder="coffee" onChange={searchChange}></input></div>
  );
};

export default TheFilter;