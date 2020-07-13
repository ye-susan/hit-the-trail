import React from 'react';

import './trail-info.styles.scss';

import ListButtons from '../list-buttons/list-buttons.component';

const TrailInfo = ({
  name,
  summary,
  stars,
  length,
  imgSmall,
  idx,
  handleSelectTrail,
  latitude,
  longitude
}) => {
  return (
    <li className='trail-item'>
      <div className='item-info'>
        <span className='name-length-span'>
          <a href='#map'>
            <h3 onClick={() => handleSelectTrail(latitude, longitude)}>
              {idx + 1}. {name}
            </h3>
          </a>
          <h4>{length} miles long</h4>
        </span>
        <p>
          {' '}
          Rated: <span className='rating'>{stars}/5</span>{' '}
        </p>
        <p>
          <strong>Summary:</strong> {summary}
        </p>
        <ListButtons />
      </div>
      <img className='trail-img' alt='hiking trail' src={imgSmall} />
    </li>
  );
};

export default TrailInfo;
