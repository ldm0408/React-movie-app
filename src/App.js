import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

  state ={
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "http://www.buddhismjournal.com/news/photo/201603/13910_18539_2211.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://upload.wikimedia.org/wikipedia/ko/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
          },
          {
            title: "Trainspotting",
            poster: "http://th.soundsblog.it/da3Er_xYkiyZ2LVCWhkXqoc_VkU=/fit-in/655xorig/http%3A%2F%2Fmedia.soundsblog.it%2F4%2F4d2%2Ftrainspotting.png"
          }
        ]
      })
    },5000)
  }

_renderMovies = ()=> {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
 
      </div>
    );
  }
}




export default App;
