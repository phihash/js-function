function indexOf(array,value,fromIndex=0){

    for(let i=fromIndex;i<array.length;i++){
        if(array[i]===value){
            return i;
        }
    }
    return -1;
}
