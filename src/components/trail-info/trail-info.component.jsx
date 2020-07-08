import React from 'react';

import './trail-info.styles.scss';

const TrailInfo = ({ name, summary, stars, length, imgSmall, idx }) => (
  <li className='trail-item'>
    <div className='item-info'>
      <h3>
        {idx + 1}. {name}
      </h3>
      <span>{summary}</span>
    </div>
    <img alt='trees' src={imgSmall} />
  </li>
);

export default TrailInfo;
