import React, { Component } from "react";
import FilmDatas from "./filmDatas";
import { Redirect } from "react-router-dom";
import "./film.css";


export default class FilmDetails extends Component {
  constructor() {
    super();
    this.state = {
      filmDatas: {}
    };
  }

  componentDidMount() {
    fetch("rest/films/:")
      .then(response => response.json()) //promises
      .then(filmDatas => {
        this.setState({ filmDatas }); // when the key and value are the same
      // filmDatas: filmDatas
    })
  }

  render() {
    return this.state.filmDatas ? (
      <div>
        <div id="detailBg">
          <div id="details">
            <h1 className="filmTitle">{this.state.filmDatas.title}</h1>
            <label>{this.state.filmDatas.detail}</label>
            <p>{this.state.filmDatas.synopsis}</p>
          </div>
          <div id="divForImage">
            <img
              id="detailImg"
              src={FilmDatas.detailImg}
              alt={FilmDatas.id}
            />
            <div className="detailOverlay"></div>
          </div>
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
