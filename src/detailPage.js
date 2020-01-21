import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CaptainDetail from "./images/captainDetail.jpg"
// import CaptainMarvelDetail from "./images/captainMarvelDetail.jpg"
// import IronmanDetail from "./images/ironman2008Detail.jpg"
// import HulkDetail from "./images/HulkDetail.jpg"
// import Ironman2Detail from "./images/ironman2010Detail.jpg"
// import Thor1 from "./images/thor2011.jpg"
// import AvengersDetail from "./images/avengers2012Detail.jpg"
// import Ironman3Detail from "./images/ironman3Detail.jpg"
// import Thor2Detail from "./images/thor2013Detail.jpg"
// import Wintersoldier from "./images/wintersoldier2014.jpg"
// import WintersoldierDetail from "./images/wintersoldier2014Detail.jpg"

export default class Details extends Component {
    
    constructor() {
        super();
        this.state = {
            message: 'Hiya'
        };
    }

    componentDidMout() {
        setTimeout(() => {
            this.setState({
                message: 'Hello Hello'
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <h1>this.state.message}</h1>
                <Link to='/'>To Home Page</Link>
            </div>
        )
    }



    // function FilmDetail(props) {
    // return(
    // <div>
    //     <Route exact path="/{props.title}" component={props.title}>
    //         <div className='detail'>
    //             <div>
    //                 <h1>{props.title}</h1>
    //                 <h3>{props.rating}/10</h3>
    //                 <label>{props.details}</label>
    //             </div>
    //             <div>
    //                 <img src={props.image} alt={props.title}/>
    //             </div>

    //         </div>
    //     </Route>
    // </div>
    // )
}