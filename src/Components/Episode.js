import React from 'react';

const Episode = (props) => {
  // let { eachEpisode } = props
  // debugger
  return (
    <div>
      Episode {props.eachEpisode.number}  - {props.eachEpisode.name}
    </div>
  )
}

export default Episode;
