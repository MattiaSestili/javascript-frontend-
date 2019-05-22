export {add, listToObject, objectToList}

function add(a, b, c){
  var a = a || 0;
  var b = b || 0;
  var c = c || 0;

  return a + b + c
}

function listToObject(array) {
  var mapped = array.map(item => ({ [item.key]: item.value }) );
  var newObj = Object.assign({}, ...mapped );
  return newObj;
}

function objectToList(obj) {
  var arr = [];
  for(var item in obj){
      arr.push(obj[item]);
   }
   return arr
}
