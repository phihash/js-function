function findIndex(array,predicate,fromIndex=0){
  for(let i=fromIndex;i<array.length;i++){
    const value =array[i];
    if(predicate(value)){
      return i;
    }
  }
  return -1;
}

/*
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result1 = findIndex(users, function(o) {
  return o.user === 'barney';
});
console.log(result1);
*/
