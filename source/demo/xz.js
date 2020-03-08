function xz(arr){
    var len=arr.length;
    var minIndex,temp;
    for(var i=0;i<len-1;i++){
        minIndex=i;
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){//判断更小的数
                minIndex=j; 
            }
        }
        temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr;
}

var arr=[2,5,3,6,1,7,9,4];
console.log(xz(arr))