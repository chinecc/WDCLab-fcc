/*
创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，
该 function 请求一个参数然后返回求和的结果。

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。
调用这个有一个参数的返回的 function，返回求和的结果：
var sumTwoAnd = add(2);
sumTwoAnd(3) 返回 5。
如果两个参数都不是有效的数字，则返回 undefined。

需要用到 闭包

*/
function add() {
  var args = Array.prototype.slice.call(arguments);  // 获取传进来的参数，成为数组
  
  // 检测参数是否为有效的数字
  var checkNum = function(num){
    if (typeof num !== "number"){
      return undefined;
    }else{
      return num;
    }
  }

  // 针对两种情况进行判断计算
  if (args.length > 1){  // 第一种情况是针对两个参数的判断计划
    var a = checkNum(args[0]);
    var b = checkNum(args[1]);
    if (a == undefined || b == undefined){
      return undefined;
    }else{
      return a + b;
    }
  }else{  // 第二种情况是针对只有一个参数的情况，如 add(2)(3)
    var c = checkNum(args[0]);
    if (c){
      return function(args2){  // 返回结果为一个函数，继续对接下去的参数进行判断计算
        if (checkNum(args2) === undefined || c === undefined){
          return undefined;
        }else{
          return c + args2;
        }
      }
    }else{
      return undefined;
    }
  }
  //return false;
}

//add(2, 3);// 应该返回 5。
//add(2)(3);// 应该返回 5。
//add("http://bit.ly/IqT6zt");// 应该返回 undefined。
//add(2, "3");// 应该返回 undefined。
add(2)([3]);// 应该返回 undefined。