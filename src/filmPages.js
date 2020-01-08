import React from "react";
import { Route } from "react-router-dom";

export default function Pages(page) {
    return(
    <div>
        <Route exact path="/{page.nameAdd}" component={page.title}>

        </Route>
    </div>
    )
}