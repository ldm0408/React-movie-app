import React, { Component} from 'react';
import './movie.css';

class Movie extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <Movieposter poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
class Movieposter extends Component {
    render() {
        console.log(this.props);
        return (
            <img src={this.props.poster} />
        )
    }
}

export default Movie;
