import React from 'react';

const Episode = (props) => {
  let { myEpisode } = props

  return (
    <div>
       {props.eachEpisode.number} - {props.eachEpisode.name}
    </div>
  )
}

export default Episode;
