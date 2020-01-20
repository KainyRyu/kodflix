import React from "react";
import { Route } from "react-router-dom";

export default function FilmDetail(props) {
    return(
    <div>
        <Route exact path="/{props.title}" component={props.title}>
            <div className='detail'>
                <div>
                    <h1>{props.title}</h1>
                    <h3>{props.rating}/10</h3>
                    <label>{props.details}</label>
                </div>
                <div>
                    <img src={props.image} alt={props.title}/>
                </div>

            </div>
        </Route>
    </div>
    )
}