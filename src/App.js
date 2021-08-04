import logo from './logo.svg';
import React from "react";
import ReactDOM from 'react-dom';
/**@jsxImportSource @emotion/react */
import {css} from  '@emotion/react';
import './App.css';
import {CreateBoard, PrintBoard} from './ChessBoard.js';
import {IsEven} from './IsEvenRecursion.js';
import {CountBs, CountChar} from './BeanCounting.js';
import {ReverseArray, ReverseArrayInPlace} from './ReverseArray.js';
import {Flatten} from './TheFlattening.js';
import {withBoxUnlocked} from './LockBox.js';
import {ButtonPage} from './ButtonPage.js';
import { CatFact } from './CatFact.jsx';


//.Add() = .push() for arrays
//.pop() remove last element of array and returns it

function App() {
  var list = [1, 2, 3, 4];
  //ReverseArray(list).forEach(element => console.log(element));
  var flatList = Flatten(list);
  console.log(flatList);
  //ReverseArrayInPlace(list).forEach(element => console.log(element));
  //console.log(CountBs("BaBBle"));
  //console.log(CountChar("turrd", "r"));
  
  withBoxUnlocked(PrintBoard(CreateBoard(8)));
  //console.log(IsEven(50));
  //console.log(IsEven(75));

  return (
    <CatFact/>    
  );
}

export default App;
