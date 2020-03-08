// function com(n,k){
//     var arr=[];
//     for(var y=1;y<=n;y++){
//         console.log(y)
//         for(var x=1;x<n;x++){
//             if(x%y>=k){
//                 arr.push(y);
//                 return arr;
//         }
//     }
//     }
//     console.log(arr.length)
// }
// com(5,2)


// function a(m,n){
//     flag=0;
//     var arr=['1'];
//     for(var i=1;i<e^9;i++){
//         arr.push(arr[i-1]+parseInt(i+1));
//     }
//     var c=arr.splice(m,n-m+1);
//     for(var j=0;j<c.length;j++){
//         if(parseInt(c[j])%3==0){
//             flag++;
//         }
//     }
//     console.log(flag)
// }
// a(2,5); //实例输入2,5


function a(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}
a(1,2,3,4,5)