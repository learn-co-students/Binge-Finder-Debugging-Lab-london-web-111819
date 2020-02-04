import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    // debugger
    if (!!this.props.searchTerm){
      // debugger
       return this.props.shows.filter((s) => s.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map(s=>
      <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
    } else {
    //TODO: SOMETHING IS WRONG HERE or ABOVE!
    return this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
