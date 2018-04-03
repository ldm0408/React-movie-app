import React, { Component } from 'react';
import './App.css';
import Movie from './movie';



const movies =[
  {
    title: "Matrix",
    poster:"http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
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
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
 
      </div>
    );
  }
}



export default App;
