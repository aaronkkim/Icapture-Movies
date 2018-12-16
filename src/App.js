import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }

  performSearch(searchTerm){
    console.log("Perform search using movieDb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=4fba833d14a0e854b19fc2ba5dc2f8bc&query=" +searchTerm
    $.ajax({
      url: urlString,
      success:(searchResults)=> { 
        console.log("fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        var movieRows =[]
        results.forEach((movie)=>{
          movie.poster_src = "https:image.tmdb.org/t/p/w185/"+movie.poster_path
          //console.log(movie.poster_path)
          const movieRow =<MovieRow key ={movie.id} movie ={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr,status,err)=>{
        console.error("Failed to fetch data")

      }
    })
  }
  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }
  render() {
    return (
      <div >
        
        <table className="titleBar"> 
          <tbody>
            <tr>
              <td>
                <img alt="app icon"width="50" src="movieDB.svg"/>
                </td>
                <td width = "8">
                  <h1>Movies DB Search</h1>
                </td>
            </tr>
          </tbody>
        </table>
        <input className="movie" onChange = {this.searchChangeHandler.bind(this)}placeholder = "Enter search term"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
