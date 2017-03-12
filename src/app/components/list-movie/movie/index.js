import React from 'react';
require('./movie.style.styl');

class MovieComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <article className="container-movie">
        <div className="container-image-movie">
          <figure>
            <img src={this.props.image} alt=""/>
          </figure>
        </div>
        <div className="container-description-movie">
          <div className="layout-like">
            <strong><span className="raiting">Ranking</span></strong>
            <strong><span>{this.props.likes}</span></strong>
          </div>
          <div className="layout-description">
            <div className="layout-description-title">
              <h3>{this.props.title}</h3>
            </div>
            <div className="layout-description-test">
              <p>
                {this.props.description}
              </p>
            </div>
          </div>
          <div className="layout-chat">

          </div>
        </div>
      </article>
    );
  }
}

export default MovieComponent;