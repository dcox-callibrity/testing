

export const IsEven = (n) => {
    if(n < 0){
        return IsEven(n * -1);
    }
    else if(n > 1){
        return IsEven(n -2);
    }
    else{
        return NumberToBool(n);
    }
}

const NumberToBool = (i) =>{
    if(i === 0){
        return true;
    }
    else return false;
}