import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <Movieposter poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie ({title,poster}){
    return(
        <div>
            <Movieposter poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

// class Movieposter extends Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <img src={this.props.poster} alt="movie poster" />
//         )
//     }
// }


// 클래스 컴퍼넌트를 functional 컴포넌트로 변환
function Movieposter({poster}){
    return(
        <img src={poster} alt="movie poster" />
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

Movieposter.propTypes = {
    poster: PropTypes.string.isRequired
}


export default Movie;
