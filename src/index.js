
exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  var num = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
             num += array[i] / array.length;
        }
     }
       return num;
}
       
