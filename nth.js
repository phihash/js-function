function nth(array,n=0){
    if(n>=0){
        return array[n];
    }else{
        return array[array.length+n];
    }

    // n>=0? return array[n] : return array[array.length+n];
}