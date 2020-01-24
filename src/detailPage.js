import React, { Component } from "react";
import FilmDetails from "./filmDetails"
import { Link } from "react-router-dom";

export default class Details extends Component {

    constructor(){
        super()
        this.state ={
            filmDetail: {}
        }
    }

    componentDidMount() {
        let filmId = this.props.match.params.cinema;
        let filmDetail = FilmDetails().find(film => film.id === filmId);
        console.log(filmDetail);
        this.setState({
            filmDetail // when the key and value are the same
            // filmDetail: filmDetail
        });
    }

    render() {
        return(
            <div>
                <h1 className='filmTitle'>{this.state.filmDetail.title}</h1>
            </div>
        )
    }
}



// function FilmDetail(props) {
//     return(
//     <div>
//         <Route exact path="/{props.title}" component={props.title}>
//             <div className='detail'>
//                 <div>
//                     <h1>{props.title}</h1>
//                     <h3>{props.rating}/10</h3>
//                     <label>{props.details}</label>
//                 </div>
//                 <div>
//                     <img src={props.image} alt={props.title}/>
//                 </div>

//             </div>
//         </Route>
//     </div>
//     )
// }