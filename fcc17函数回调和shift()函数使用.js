/*
让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，
就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，
如果返回fasle，继续抛出，直到返回true。// 这里的意思是只要遇到一次true就直接返回
最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。

Arguments object
Array.shift()
Array.slice()
*/

function drop(arr, func) {
  // Drop them elements.
  var flag = 0;
  for (var i = 0; i < arr.length;){
    if (!func(arr[i])) {
       if (i === 0 ) { 
         // 这里分两种情况进行抛出，一种是第一个元素在func里面返回为false的情况下吐出，arr就会重新开始判断，用i来控制循环
         arr.shift();
         i=0; // 吐出后，循环重新从第一个位置开始
       }else{
         arr.splice(i,1); // 一种情况是遇到是非第一个元素返回的是flase，那么需要根据i的位置把当前的元素 吐出，使用splice直接对arr进行操作
       }
      flag = 1; // 标记到如果吐出过一次后，下一回条件为true时直接返回
    } else{
      i++;
      if (flag) break; // 只要遇到一次是true的情况下就直接返回arr
    } 
  }
  // var newArr = arr;
  return arr;
}

//drop([1, 2, 3], function(n) {return n < 3; }); // 应该返回[1,2]，函数里面的条件如果成立就保留

 //drop([1, 2, 3, 4], function(n) {return n >= 3;});// 应该返回 [3, 4]。
// drop([0, 1, 0, 1], function(n) {return n === 1;});// 应该返回 [1, 0, 1]。
 drop([1, 2, 3], function(n) {return n > 0;});// 应该返回 [1, 2, 3]。
// drop([1, 2, 3, 4], function(n) {return n > 5;});// 应该返回 []。
// drop([1, 2, 3, 7, 4], function(n) {return n > 3;});// 应该返回 [7, 4]。
// drop([1, 2, 3, 9, 2], function(n) {return n > 2;});// 应该返回 [3, 9, 2]