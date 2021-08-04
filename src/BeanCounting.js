export const CountBs = (string) =>{
    var count = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === "B")
        {
            count += 1;
        }
    }
    return count;
}
export const CountChar = (string, char) => {
    var count = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === char)
        {
            count += 1;
        }
    }

    return count;
}