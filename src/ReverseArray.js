export const ReverseArray =(list)=>{
    var newList = []
    for(let i = list.length; i >= 0; i--){
        newList.push(list[i]);
    }
    return newList;
}
export const ReverseArrayInPlace = (list) => {
   
    for(let i = 0; i < list.length; i++){
        var entry = list[0];
        var index = list.length - (i + 1);
        list.shift(0);
        list.splice(index, 0, entry);
    }

    return list;
}