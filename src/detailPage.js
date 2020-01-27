import React, { Component } from "react";
import FilmDatas from "./filmDatas";
import { Redirect } from "react-router-dom";
import "./film.css";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      filmDatas: {}
    };
  }

  componentDidMount() {
    let filmId = this.props.match.params.cinema;
    let filmDatas = FilmDatas().find(film => film.id === filmId);
    this.setState({
      filmDatas // when the key and value are the same
      // filmDatas: filmDatas
    });
  }

  render() {
    return this.state.filmDatas ? (
        <div>
          
            <h1 className="filmTitle">{this.state.filmDatas.title}</h1>
            <div className='detailBg'>
            <div>
                <h1></h1>
                <label></label>
                <p></p>
            </div>
            {/* <img src={} alt={} /> */}
        </div>
        </div>
    ) : (
      <Redirect to="/not-found" />
    );
    //   <div>{<h1 className="filmTitle">{this.state.filmDatas.title}</h1>}</div>
  }
}

// function FilmDatas(props) {
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
