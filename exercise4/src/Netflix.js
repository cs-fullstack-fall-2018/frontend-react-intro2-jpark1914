import React, { Component } from 'react';
import DisplayMovies from './DisplayMovies';


class Netflix extends Component {
    render() {
        var theFlix = [{movieName: 'Stranger Things', yearReleased: 2016, genre: 'Psychological Thriller'}, {movieName: 'Tau', yearReleased: 2018, genre: 'Horror'}, {movieName: 'The Office', yearReleased: 2007, genre: 'Comedy'}]
        return (
            <div>
                <DisplayMovies flix={theFlix}/>
            </div>
    );
    }
}

export default Netflix;
