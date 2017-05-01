// 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
// 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
/*
  最大公约数
  最小公倍数 = (a * b) / 最大公约数
  http://wiki.jikexueyuan.com/project/step-by-step-learning-algorithm/greatest-common-divisor-least-common-multiple.html
*/

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {  // 通过sort函数把 a,b两个参数比较后 按降序调换
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);  // 把a,b之间的数字 输出到 newArr里面，从大到小输出
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];  // 此处的newArr[0]和newArr[1]是参数里面最大的数及最大数-1
    // 题目的要求是给定参数间的连续数字能够整数的最小公倍数，获取最小公倍数算法，能够被两个数整除的最小公倍数 a*b*loop
    for (n = 2; n < newArr.length; n++) {  //把获取的最小公倍数逐个比较是否会被a,b之间的连续的数字整除
      if (quot % newArr[n] !== 0) { // 如果其中数字有被整除跳出循环，用n来记录循环次数
        break;
      }
    }

    loop++;
  } while (n !== newArr.length); // n如果等于newArr的长度，说明逐个数字都能被整除，循环结束

  return quot;
}

// test here
smallestCommons([1,5]);