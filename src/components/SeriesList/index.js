import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({series2}) => (
  <li key={series2.show.id}>
    <Link to={`/series/${series2.show.id}`}>
      {series2.show.name}
    </Link>
  </li>
)
const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series1 => (
          <SeriesListItem series2={series1} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
