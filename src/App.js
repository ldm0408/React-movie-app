import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

 state={

 }
  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async ()=>{
    const movies = await this._callApi() //이 라인 작업이 완료 되기전엔 16행~19행이 실행 하지않는다
    this.setState({
      movies //모던 자바스크립트 문법
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

_renderMovies = ()=> {
  const movies = this.state.movies.map((movie) => {
    return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image}
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis} />
  })
  return movies
}

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
 
      </div>
    );
  }
}




export default App;
