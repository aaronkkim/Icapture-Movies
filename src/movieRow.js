import React from 'react'

class MovieRow extends React.Component{
    render(){
        return <table key ={this.props.movie.id}>
        <tbody>
            <tr>
                <td>
                    <img alt ="poster" width="120" src ={this.props.movie.poster_src}/>   
                </td>
                <td>
                    {this.props.movie.title}
                    {this.props.movie.overview}
                </td>
            </tr>
        </tbody>
     </table>
    }
}

export default MovieRow