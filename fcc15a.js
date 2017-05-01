function smallestCommons(arr) {
  
  // 调换a,b两个参数的大小,降序
  arr.sort(function(a,b){
    return b-a;
  });
  
  // 生成newArr,把a,b之间的数输出
  var newArr = [];
  
  for (var i = arr[0]; i >= arr[1]; i--){ // 从大到小输出
    newArr.push(i);
  }

 //   取最小公倍数算法
 var quot = 0;
 var loop = 1;
 var n;
 
 do {
     quot = newArr[0]*loop*newArr[1]; // 除newArr数组里面最大两个数的倍数，进行整除循环判断是否为可以被ab之间连续整除的最小公倍数
     for (n = 2; n <= newArr.length; n++ ){
         if (quot % newArr[n] !== 0){  // 判断如果quot不被其中任何一个数整除，就不符合条件，直接退出循环
             break;
         }
     }
     loop++;  // 继续循环，生成新的quot值
 } while (n !== newArr.length); // 只有当n的值和newArr的值相等，说明quot被所有数都能整除，这个quot就是符合题目要求的值

 arr = quot; 
  
  return arr;
}


smallestCommons([1,5]);
