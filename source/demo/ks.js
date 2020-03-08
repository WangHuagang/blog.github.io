var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　console.log(pivot)
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));//将数组进行重新拼接起来
    };
    var arr=[2,5,3,6,1,7,9,4];
    console.log(quickSort(arr));