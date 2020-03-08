let funa=function(oldStr){
    var arr2=[];
    var arr=oldStr.split('').join('');
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++)
        if(arr[i]=arr2[j]){
            arr2.push(arr[i])
        }
    }
}