import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Details extends Component {

    constructor(){
        super()
        this.state ={
            message:'Testiiiiiiiiing'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                message:'Testing Testing'
            })
        }, 3000)
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <Link to='/'> Back to Home </Link>
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