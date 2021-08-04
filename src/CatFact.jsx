import React from "react";
import axios from 'axios';
/**@jsxImportSource @emotion/react */
import {css} from  '@emotion/react';

export class CatFact extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fact: ''
        }
    }

    clickHandler = (event) => {
        axios.get('https://catfact.ninja/fact')
        .then(res => {
            const newFact = res.data.fact;
            this.setState({fact: newFact});
        })
    }
    

    render(){
        
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
                justify-content: center;
            `} type="button" onClick={event => this.clickHandler(event)}>Click Me</button>
            <p css = {css`
                text-align: center;
                justify-content: center;
                align-content: center;
            `}>
                {this.state.fact}
            </p>
        </div>
            
        )
    }

}