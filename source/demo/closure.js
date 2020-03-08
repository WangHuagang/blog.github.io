// var a='wang';
// function fun(){
//     var b='huagang';
//     console.log('这是在函数内部的输出');
//     console.log(a);
//     console.log(b);
// }
// fun();//调用函数

// console.log("这是在函数外部的输出");
// console.log(a);
// console.log(b);



// var a;
// console.log(a);
// a='wang';
// console.log(a)


// function funA(c){
//     var a='wang';
//     function funB(){
//         var b='gang';
//         console.log("在函数B中的输出：")
//         console.log(a);
//         console.log(c);
//         console.log(b);
//     }
//     funB();
//     console.log("在函数A中的输出：")
//     console.log(a);
//     console.log(c);
//     console.log(b);
// }
// funA('hua');//调用函数A并传参


// function funA(a){
//     function funB(b){
//         return a + b;
//     }
//     return funB;//调用函数B的引用
// }
// var C = funA(2);
// var sum = C(3);
// console.log(sum);//输出结果 5


// function funA(){
//     function funB(b){
//         var a = 'wang';//内部变量 c
//         return a+b ;
//     }
//     return funB;
// }
// var a = 'hua';//外部变量x，是不能改变闭包B中的变量a的
// var sum = funA()(a);
// console.log(a);
// console.log(sum);


