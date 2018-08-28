import React, {Component} from 'react'
import Netflix from './Netflix'

class DisplayMovies extends Component {
    render(){
        var forEachItem = this.props.flix.map( eachItem =>{
            return(
            <div>
            <h1>The Movie Name:{eachItem.movieName}</h1>
            <h1>The Release Year:{eachItem.yearReleased}</h1>
            <h1>The Genre:{eachItem.genre}</h1>
            </div>
            )});
        return(
            <p>{forEachItem}</p>
        )
    }
}
export default DisplayMovies;