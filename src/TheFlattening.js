export const Flatten = (list) => {
    var flatList = list.reduce(function(sum, item){
        return sum + item;
    });
    return flatList;
}