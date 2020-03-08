## 翻转字符串算法挑战
实战翻转字符串算法
你可以先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，然后把数组转化成字符串。结果必须得是一个字符串
```
function reverseString(str) {
    var arr=[];
    arr=str.split(""); //将字符串转换成数组
    arr.reverse(); //利用数组的翻转函数进行翻转
    str=arr.join(""); //将数组转换成字符串
    return str;
}
console.log(reverseString("hello")) ;
```

## 阶乘算法挑战
计算所提供整数的阶乘。如果使用字母n代表一个整数，则阶乘是所有小于或等于n的整数的乘积。
阶乘通常简写成 n!
```
function factorialize(num) {
    var i=1;
    var sum=1;
    for(;i<num+1;i++){
        sum=sum*i;
    }
    return sum;
}

factorialize(5);
factorialize(10);
factorialize(20);

```

## 回文算法
如果给定的字符串是回文，返回true，反之，返回false。
palindrome(回文)是指一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样。
注意:您需要删除字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是不是回文。
```
function palindrome(str) {
    newStr=str.replace(/[^0-9a-z]/gi, "");
    var arr=[];
    arr=newStr.split("");
    arr.reverse();
    newStr=arr.join("");
    if(newStr==str){
        return true;
    }else{
        return false;
    }
}

palindrome("racecar") ;

```
## 寻找最长的单词算法
返回提供的句子中最长的单词的长度。返回值应该是一个数字。
```
function findLongestWord(str) {
    var arr=[];
    var maxNum=0;
    arr=str.split(" ");
    for(var i=0;i<arr.length-1;i++){
        if(arr[i].length>maxNum){
            maxNum=arr[i].length;
        }
    }
    return maxNum;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

```