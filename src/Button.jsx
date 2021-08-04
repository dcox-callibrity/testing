import React from "react";
/**@jsxImportSource @emotion/react */
import {css} from  '@emotion/react';
import { catFact } from "./CatFact";
import axios from 'axios';

// componentDidMount() {
//     axios.get('https://catfact.ninja/fact')
//     .then(res => {
//         const fact = res.data;
//         this.setState({fact});
//     })
//}

export const Button = (text) => {
    //document.getElementByName("bigRed").addEventListener("click", eventHandled);
    var kitty = new catFact();
    const eventHandled = function(){
            axios.get('https://catfact.ninja/fact')
            .then(res => {
                const fact = res.data;
                kitty.setState({fact});
            })
            .then(function(res) {
                console.log(res);
                kitty.render();
            })
            .catch(function(err){
                console.log(err);
            })
        
    }
     return (
     <div css = { css`
        margin: 0;
        position: absolute;
        top: 25%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
     `}>
        <button css = {css`
            background-color: red;
            border: black;
            border-width: 10px;
            color: white;
            text-align: center;
            font-size: 16;
            border-radius: 50%;
            height: 100px;
            width: 100px;
        `} name="bigRed" onClick={eventHandled}>Click Me</button>
    </div>
     )}

