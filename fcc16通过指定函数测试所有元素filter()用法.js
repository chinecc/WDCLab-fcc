/*
写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
Array.filter()
filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
callback
用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
返回true表示保留该元素（通过测试），false则不保留。
thisArg
可选。执行 callback 时的用于 this 的值。

filter 不会改变原数组。
*/

function find(arr, func) {
  var num = 0;
  var newArr = arr.filter(func);
  num = newArr[0];
  return num;
}

//find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });// 应该返回 8。
//find([1, 3, 5, 9], function(num) { return num % 2 === 0; });// 应该返回 undefined。