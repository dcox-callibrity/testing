import React from "react";
import { ReactDOM } from "react";
/**@jsxImportSource @emotion/react */
import {css} from  '@emotion/react';
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { CatFact } from "./CatFact";

export const ButtonPage = () => {
    return (
        <div id="catBtn">
           { ReactDOM.render(
                React.createElement(CatFact),
                document.getElementById('catBtn')
            )}            
        </div>
    )
}