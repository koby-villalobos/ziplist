function zipList(array1, array2) {
  let finished = [];
  for(let i = 0; i < array1.length; i++){
    finished.push(array1[i]);
    finished.push(array2[i]);
  }
  return finished;
}


console.log(zipList([1, 2, 3],[1, 2, 3]));


function zipListTheEasyWay(array1, array2){
 let finished = _.flatten(_.zip(array1, array2));
  return finished;
}

console.log(zipListTheEasyWay([1, 2, 3],[1, 2, 3]));
