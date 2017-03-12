import React from 'react';
import ReactDOM from 'react-dom';
import MovieListComponent from './list-movie/';
require('./app.styl');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="general-container">
        <header className="header">
          <h1 className="title"> tvify </h1>
        </header>
        <section className="container-app">
          <MovieListComponent movies={this.state.movies} onSearchMovie={this.searchMovie.bind(this)}/>
        </section>
      </div>
    )
  }

  searchMovie(){
    let movie = document.getElementById("search");
    if (movie){
      fetch(`http://api.tvmaze.com/search/shows?q=${movie.value}`)
        .then((response) => {
          return response.json()
        })
        .then((movies) => {
          console.log(movies);
          this.setState({ movies: movies })
        })
    }
  }

  componentWillMount() {
    fetch(' http://api.tvmaze.com/shows')
      .then((response) => {
        return response.json()
      })
      .then((movies) => {
        console.log(movies);
        this.setState({ movies: movies })
      })
  }

}

ReactDOM.render(<App />, document.getElementById('app'))