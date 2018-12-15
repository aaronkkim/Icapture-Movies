import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={}
   // console.log("This is my initializer")
  //   const movies = [
  //     {poster_src:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5aabd60603ce641d203135e6/1521210900998/epic-poster-released-for-avengers-infinity-war-packs-in-a-ton-of-characters1?format=1500w", id:0, title:"Avengers 1",overview:"marvel movie"},
  //     {poster_src:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5aabd60603ce641d203135e6/1521210900998/epic-poster-released-for-avengers-infinity-war-packs-in-a-ton-of-characters1?format=1500w",id:1, title:"Avengers 2",overview:"2marvel 2movie"}
  //   ]

  // var movieRows =[]
  // movies.forEach((movie)=>{
  //   console.log (movie.title)
  //   const movieRow = <MovieRow movie ={movie}/>
 
  //   movieRows.push(movieRow)
  // })
  // this.state ={rows:movieRows}
  //this.performSearch("avenger")
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
        <input style={{
          fontSize:24,
          display:'block',
          width:"99%",
          paddingtop: 8,
          paddingBottom: 9,
          paddingLeft: 16
        }} onChange = {this.searchChangeHandler.bind(this)}placeholder = "Enter search term/"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
