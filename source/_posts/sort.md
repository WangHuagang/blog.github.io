---
title: 【算法详解】冒泡/选择/插入/快速排序详解·JS实现
author: 王华港
date: 2018-04-19 17:17:50
tags: [Python]
categories: Python
comments: true
top: 35
keywords: 冒泡/选择/插入/快速排序详解·JS实现
---

![](/images/sort.jpg)

最近再深入了解了一下排序算法，大概总结了一下，直接在代码中一行一行的进行注释。
算法思路==>实现代码==>代码详细注释==>演示过程，带来更加直观的理解。
所有的代码可直接运行，查看结果。
<!--more-->
### 冒泡排序
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>冒泡排序</title>
</head>

<body>
    <script>
        //swap是交换数组内位置的函数
        function swap(_arr, index1, index2) {
            const arr = _arr;
            arr[index1] += arr[index2];
            arr[index2] = arr[index1] - arr[index2];
            arr[index1] -= arr[index2];
        }

        // 基本思路：

        // 前一项(i)与后一项(i+1)项比较，如果前一项比后一项大就交换这两项；
        // 重复这个过程到最后；
        // 一趟完成后再从头开始重复上面的步骤，有多少项就要重复几次。
        function bubbleSort(_arr) {
            const arr = [].slice.call(_arr);
            const len = arr.length;
            for (let i = 0; i < len; i += 1) {
                for (let f = 0; f < len - 1; f += 1) {
                    // 相邻两个元素进行比较
                    if (arr[f] > arr[f + 1]) {
                        // 交换位置
                        swap(arr, f, f + 1);
                    }
                }
            }
            return arr;
        }
        console.log(bubbleSort([2, 5, 4, 7, 3]))
        
        // 演示过程
        // // 初始
        // 5 4 9 5 3

        // // 第一趟
        // 4 5 9 5 3  // 5>4，交换
        // ^ ^
        // 4 5 9 5 3  // 5<9，不变
        //   ^ ^
        // 4 5 5 9 3  // 9>5，交换
        //     ^ ^
        // 4 5 5 3 9  // 9>3，交换
        //       ^ ^

        // // 第二趟
        // 4 5 5 3 9  // 4<5，不变
        // ^ ^
        // 4 5 5 3 9  // 5=5，不变
        //   ^ ^
        // 4 5 3 5 9  // 5>3，交换
        //     ^ ^
        // 4 5 3 5 9  // 5<9，不变
        //       ^ ^

        // // 第三趟
        // 4 5 3 5 9  // 4<5，不变
        // ^ ^
        // 4 3 5 5 9  // 5>3，交换
        //   ^ ^
        // 4 3 5 5 9  // 5=5，不变
        //     ^ ^
        // 4 3 5 5 9  // 5<9，不变
        //       ^ ^

        // // 第四趟
        // 3 4 5 5 9  // 4>3，交换
        // ^ ^
        // 3 4 5 5 9  // 4<5，不变
        //   ^ ^
        // 3 4 5 5 9  // 5=5，不变
        //     ^ ^
        // 3 4 5 5 9  // 5<9，不变
        //       ^ ^

        // // 第五趟
        // 3 4 5 5 9  // 3<4，不变
        // ^ ^
        // 3 4 5 5 9  // 4<5，不变
        //   ^ ^
        // 3 4 5 5 9  // 5=5，不变
        //     ^ ^
        // 3 4 5 5 9  // 5<9，不变
        //       ^ ^

        // // 结果
        // 3 4 5 5 9



        //  改进方案

        // 通过上面的排序过程，可以发现其实每一趟就可以确定最后一位的位置了，

        // 所以可以不用再比较最后的位置。代码改造也很小，只要在内循环减去已经确定的位置数即可。

        function modifiedBubbleSort(_arr) {
            const arr = [].slice.call(_arr);
            const len = arr.length;
            for (let i = 0; i < len; i += 1) {
                // 每一趟便能确定最后一个数，所以可以减少一些不必要的比较
                for (let f = 0; f < len - i - 1; f += 1) {
                    if (arr[f] > arr[f + 1]) {
                        swap(arr, f, f + 1);
                    }
                }
            }
            return arr;
        }
        console.log(modifiedBubbleSort([2, 5, 4, 7, 3]))

        // 演示过程
        // 5 4 9 5 3

        // // 第一趟
        // 4 5 9 5 3  // 5>4，交换
        // ^ ^
        // 4 5 9 5 3  // 5<9，不变
        //   ^ ^
        // 4 5 5 9 3  // 9>5，交换
        //     ^ ^
        // 4 5 5 3 9  // 9>3，交换
        //       ^ ^

        // // 第二趟
        // 4 5 5 3 9  // 4<5，不变
        // ^ ^
        // 4 5 5 3 9  // 5=5，不变
        //   ^ ^
        // 4 5 3 5 9  // 5>3，交换
        //     ^ ^

        // // 第三趟
        // 4 5 3 5 9  // 4<5，不变
        // ^ ^
        // 4 3 5 5 9  // 5>3，交换
        //   ^ ^

        // // 第四趟
        // 3 4 5 5 9  // 4>3，交换
        // ^ ^

        // // 结果
        // 3 4 5 5 9

    </script>

</body>

</html>
```

### 插入排序
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>插入排序</title>
</head>

<body>
    <script>
        //swap是交换数组内位置的函数
        function swap(_arr, index1, index2) {
            const arr = _arr;
            arr[index1] += arr[index2];
            arr[index2] = arr[index1] - arr[index2];
        }
        // 插入排序就是要把后面的数往前面插入。假定第一项已经排序了，接着从第二项开始，依次判断当前项应该插入到前面的哪个位置。 
        // 基本思路：

        // 1.从第二项开始(i=1)，当前项(i)，缓存其值和位置；
        // 2.向前遍历，指针f初始化为i位置，如果f-1大于当前项的值，则交换f和f-1（即f-1向后移动一位），并f--；
        // 3.如果遇到f-1小于当前值，或f=0时停止循环，这时候f即是当前项的位置，将之前的缓存值写入该位置。

        function insertionSort(_arr) {
            const arr = [].slice.call(_arr);
            const len = arr.length;
            // 从第2个元素开始和前面的元素比较，取到最后一个元素完
            for (let i = 1; i < len; i += 1) {
                let f = i;
                // 获取到当前要比较元素的值
                const temp = arr[i];
                // 遇到f-1小于当前值，或f=0时停止循环
                while (f > 0 && arr[f - 1] > temp) {
                    // 值更大的那一个元素向后移动,即当前比较的元素向前插入
                    arr[f] = arr[f - 1];
                    f -= 1;
                }
                // 这时候f即是当前项的位置，将之前的缓存值写入该位置
                arr[f] = temp;
            }
            return arr;
        }

       console.log(insertionSort([2, 5, 4, 7, 3]))

        // // 演示过程
        // 5 4 9 5 3

        // // 第一趟，当前项是1号位，数字4
        // _ 5 9 5 3  // 4<5，5向后移动
        // ^ ^
        // 4 5 9 5 3  // 遍历结束，写入4
        // ^

        // // 第二趟，当前项是2号位，数字9
        // 4 5 9 5 3  // 9>5，不变
        //   ^
        // 4 5 9 5 3  // 9>4，不变，遍历结束
        // ^

        // // 第三趟，当前项是3号位，数字5
        // 4 5 _ 9 3  // 5<9，9向后移动
        //     ^ ^
        // 4 5 _ 9 3  // 5=5，不变
        //   ^
        // 4 5 _ 9 3  // 5>4，不变
        // ^
        // 4 5 5 9 3  // 遍历结束，写入5
        //     ^

        // // 第四趟，当前项是4号位，数字3
        // 4 5 5 _ 9  // 3<9，9向后移动
        //       ^ ^
        // 4 5 _ 5 9  // 3<5，5向后移动
        //     ^ ^
        // 4 _ 5 5 9  // 3<5，5向后移动
        //   ^ ^
        // _ 4 5 5 9  // 3<4，4向后移动
        // ^ ^
        // 3 4 5 5 9  // 遍历结束，写入3
        // ^

        // // 结果
        // 3 4 5 5 9

    </script>
</body>

</html>
```

### 选择排序
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>选择排序</title>
</head>
<body>
    <script>
      //swap是交换数组内位置的函数
      function swap(_arr, index1, index2) {
            const arr = _arr;
            arr[index1] += arr[index2];
            arr[index2] = arr[index1] - arr[index2];
            arr[index1] -= arr[index2];
        }
        // 选择排序算法是一种原址比较排序算法。这也是比较简单的过程，只要不断遍历找到最小的数依次放入位置即可。 
        // 基本思路：

        // 1.设定一个指针指向最小的数，从0号位开始；

        // 2.遍历数据，如果遇到比当前指针指向的数还小的数，就将指针重新指向这个新位置；

        // 3.遍历完成即得到了最小的数的位置，把0号位与这个位置的数交换；
        
        // 4.接下来就是1号位，重复以上步骤直到全部位置都正确
          
          
            function selectionSort(_arr) {
                const arr = [].slice.call(_arr);
                const len = arr.length;
                // 从0号位开始遍历，只取到倒数第二个值
                for (let i = 0; i < len - 1; i += 1) {
                    // 选定指针的位置，依次作为指针的指向
                    let indexMin = i;
                    // 从第二个元素开始进行比较,取到最后一个元素
                    for (let f = i + 1; f < len; f += 1) {
                        // 如果当前的元素比指针位的元素小，则把小的那个值赋值给indexMin
                        if (arr[indexMin] > arr[f]) {
                            indexMin = f;
                        }
                    }
                    // 如果指针的位置换了位置，即不等于原始i的值，则交换位置
                    if (indexMin !== i) {
                        swap(arr, indexMin, i);
                    }
                }
                return arr;
            }

            console.log(selectionSort([2, 5, 4, 7, 3]))

            // 实例过程
            // 5 4 9 5 3

            // // 第一趟，指针指向0号位
            // 5 4 9 5 3  // 4<5，指针指向1号位
            //   ^
            // 5 4 9 5 3  // 9>4，指针不变
            //   ^
            // 5 4 9 5 3  // 5>4，指针不变
            //   ^
            // 5 4 9 5 3  // 3<4，指针指向4号位
            //         ^
            // 3 4 9 5 5   // 遍历结束，交换0号位和4号位

            // // 第二趟，指针指向1号位
            // 3 4 9 5 5  // 9>4，指针不变
            //   ^
            // 3 4 9 5 5  // 5>4，指针不变
            //   ^
            // 3 4 9 5 5  // 5>4，指针不变
            //   ^
            // 3 4 9 5 5  // 遍历结束，1号位不变

            // // 第三趟，指针指向2号位
            // 3 4 9 5 5  // 5<9，指针指向3号位
            //       ^
            // 3 4 9 5 5  // 5=5，指针不变
            //       ^
            // 3 4 5 9 5  // 遍历结束，交换2号位和3号位

            // // 第四趟，指针指向3号位
            // 3 4 5 9 5  // 5<9，指针指向4号位
            //         ^
            // 3 4 5 5 9  // 遍历结束，交换3号位和4号位

            // // 结果
            // 3 4 5 5 9

    </script>
</body>
</html>
```

### 快速排序
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>快速排序</title>
</head>
<body>
    <script>

        // 快速排序的思想跟归并很像，都是分治方法，但它没有像归并排序那样将它们分割开，而是使用指针游标来标记，每次会确定一个参考数的位置。稍微会比前面的复杂一些。 
       
        // 基本思路：

        // 1.取数组的第0项作为参考数，缓存0号位的数。

        // 2.设定一个从0号位开始的low指针，一个从末尾开始的high指针；

        // 3.先从high指针开始移动，指针指向的数与参考数做比较，如果大于或等于参考数则继续向前移动，如果小于参考数则停下并把high指针指向的数替换到当前low指针指向的位置；

        // 4.再从low指针开始移动，指针指向的数与参考数做比较，如果小于或等于参考数则继续向后移动，如果大于参考数则停下并把low指针指向的数替换到当前high指针指向的位置；

        // 5.如此循环交替移动两个指针，直到low指针的指向位高于或等于high的指向位；

        // 6.至此low指向位即是参考数的位置pivotloc，将参考数写入low指向的位置；

        // 7.以此位置pivotloc为分割，在左右两边重复上述的步骤，直到排序完成。

        function quickSort(_arr) {
            const arr = [].slice.call(_arr);
            function partition(low, high) {
                // 首先设置一个参考的数，一般是以第一个数为参考数
                const pivotkey = arr[low];
                // 定义最左边的指针和定义最右边的指针
                let i = low;
                let j = high;
                // 当i和j还没相遇的时候就一直循环
                while (i < j) {
                    // i<j且数都比参考数大的时候从右往左找，找到比参考数pivotkey小的数
                    while (i < j && arr[j] >= pivotkey) {
                        j -= 1;
                    }
                    // 找到了比参考数小的数就停止下来，然后就该从左边开始找了 
                    arr[i] = arr[j];
                    // // i<j且数都比参考数小的时候从左往右找，找到比参考数pivotkey大的数
                    while (i < j && arr[i] <= pivotkey) {
                        i += 1;
                    }
                    // 找到了比参考数大的数就与右边找到的比参考数小的那个数进行交换位置，然后第一轮交换就结束了。然后继续又右边开始找，开始第二轮交换。
                    arr[j] = arr[i];
                }
                // 当i和j相遇的时候，这一次的所有交换就结束了。这时，将当前相遇的位置与参考数交换。
                // 这时，参考数的左边都是比参考数小的数，右边都是比参考数大的数
                arr[i] = pivotkey;
                return i;
            }
            (function QSort(low, high) {
                // 这时对两边的序列继续进行上面的操作，继续交换，进行排序，
                if (low < high) {
                    const pivotloc = partition(low, high);
                    // 左边的序列
                    QSort(low, pivotloc - 1);
                    // 右边的序列
                    QSort(pivotloc + 1, high);
                }
            }(0, arr.length - 1));
            return arr;
        }
        console.log(quickSort([2, 5, 4, 7, 3]))

        // 演示过程
        // 5 4 9 5 3

        // // 第一趟，参考数为5
        // 5 4 9 5 3  // high开始移动，3<5，high停止
        // ^L      ^H
        // 3 4 9 5 3  // 将high指向数3写入到low位置
        // ^L      ^H
        // 3 4 9 5 3  // low开始移动，3<5，继续前进
        // ^L      ^H
        // 3 4 9 5 3  // 4<5，继续前进
        //   ^L    ^H
        // 3 4 9 5 3  // 9>5，low停止
        //     ^L  ^H
        // 3 4 9 5 9  // 将low指向数9写入到high位置
        //     ^L  ^H
        // 3 4 9 5 9  // high开始移动，9>5，继续后退
        //     ^L  ^H
        // 3 4 9 5 9  // high开始移动，5=5，继续后退
        //     ^L^H
        // 3 4 5 5 9  // 两指针重合，结束，确定参考数5的位置，写入
        //     *

        // // 第二趟，参考数为3
        // 3 4 5 5 9  // high开始移动，4>3，继续后退
        // ^L^H*
        // 3 4 5 5 9  // 两指针重合，结束，确定参考数3的位置，写入
        // *   *

        // // 第三趟，参考数为4
        // 3 4 5 5 9  // 两指针重合，结束，确定参考数4的位置，写入
        // * * *

        // // 第四趟，参考数为5
        // 3 4 5 5 9  // high开始移动，9>5，继续后退
        // * * * ^L^H
        // 3 4 5 5 9  // 两指针重合，结束，确定参考数5的位置，写入
        // * * * *

        // // 第五趟，参考数为9
        // 3 4 5 5 9  // 两指针重合，结束，确定参考数9的位置，写入
        // * * * * *

        // // 结果
        // 3 4 5 5 9


    </script>
</body>
</html>
```
>转载文章时请注明本文的出处 || [咕噜先森的博客](http://www.blog.54whg.cn) 作者->@王华港

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb26b3220fad854a3119dd8d11ddc6eb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>