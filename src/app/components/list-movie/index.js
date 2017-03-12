import React from 'react';
import MovieComponent from './movie/';
require('./list-movie.styl');

class ListComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="layout-movie">
        <div className="container-serach-movie">
          <div className="serarch-layout">
            <input id="search" type="text" placeholder="Search movie"/>
            <buttom onClick={this.props.onSearchMovie}>search</buttom>
          </div>
        </div>
        <div className="container-movies">
          {
            this.props.movies.map((movie) =>{
              if (movie.show){
                let image = movie.show.image ? movie.show.image.medium : '';
                return <MovieComponent
                  key={movie.show.id}
                  image={image}
                  title={movie.show.name}
                  description={movie.show.summary}
                  likes={movie.show.rating.average}
                />
              }else{
                let image = movie.image.medium ? movie.image.medium : '';
                return <MovieComponent
                  key={movie.id}
                  image={image}
                  title={movie.name}
                  description={movie.summary}
                  likes={movie.rating.average}
                />
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default ListComponent;