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
  this.performSearch()
  }
  performSearch(){
    console.log("Perform search using movieDb")
    $.ajax({
      
    })
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
        }}placeholder = "Enter search term/"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
