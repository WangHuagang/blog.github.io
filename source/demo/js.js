function countingSort(array) {
    　　var len = array.length,
    　　B = [],
    　　C = [],
    　　min = max = array[0];
    　　for (var i = 0; i < len; i++) {
    　　　　min = min <= array[i] ? min : array[i];
    　　　　max = max >= array[i] ? max : array[i];
    　　　　C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    　　}
    　　for (var k = 0; k <len; k++) {
    　　　　var length = C[k];
    　　　　for(var m = 0 ;m <length ; m++){
    　　　　　　B.push(k);
    　　　　}
    　　}
    　　return B;
    }
    var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
    console.log(countingSort(arr)); 