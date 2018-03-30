import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages =[
  "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg",
  "http://www.buddhismjournal.com/news/photo/201603/13910_18539_2211.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      
      </div>
    );
  }
}



export default App;
