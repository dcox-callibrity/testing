import { isEven } from "./NumberValidation";

export const CreateBoard = (amt) => {
    var lineString;
    var lineArray = new Array(amt);
    
    for(var i=0; i < amt; i++){
        if(isEven(i))
        {
            lineString = CreateEvenLine(amt);
        }
        else 
        {
            lineString = CreateOddLine(amt);
        }
        lineArray[i] = lineString;
    }
    
    return lineArray;
}

export const PrintBoard = (list) => {
    for(var i = 0; i < list.length; i++){
        console.log(list[i.toString()]);
    }
}
const CreateEvenLine = (amt) =>{
    var lineString = "";
    var hash = "#";
    var space = " ";

    for(var i=0; i < amt; i++){
        if(isEven(i)){
            lineString = lineString + hash;
        }
        else{
            lineString = lineString + space;
        }
    }

    return lineString;
}

const CreateOddLine = (amt) =>{
    var lineString = "";
    var hash = "#";
    var space = " ";

    for(var i=0; i < amt; i++){
        if(isEven(i)){
            lineString = lineString + space;
        }
        else{
            lineString = lineString + hash;
        }
    }

    return lineString;
}