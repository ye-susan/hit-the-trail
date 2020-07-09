import React from 'react';

import './trail-info.styles.scss';

const TrailInfo = ({ name, summary, stars, length, imgSmall, idx }) => (
  <li className='trail-item'>
    <div className='item-info'>
      <span className='name-length-span'>
        <h3>
          {idx + 1}. {name}
        </h3>
        <h4>
          {length} miles long
        </h4>
      </span>
      <p> Rated: <span class="rating">{stars}/5</span> </p>
      <p><strong>Summary:</strong> {summary}</p>
    </div>
    <img class='trail-img' alt='trees' src={imgSmall} />
  </li>
);

export default TrailInfo;
