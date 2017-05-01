// 求小于等于给定数值的质数之和。
// 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

function sumPrimes(num) {
  var arr = [];
  var result;
  if (num < 2){
      return "1不是质数！";
  }else if (num == 2){
    return 2;
  }else{
      for (var i = 2; i <=num; i++){ //取所有小于等于给定数值的质数存到 arr里面
        result = deterPrimes(i);  // 判断所有小于等于给定数值是否为质数
        if (result === 0) {
          arr.push(i);
        }
      }
  }
  
  var sum = 0;
  arr.forEach(function(x) {  // 把数组里面的所有质数相加
      sum += x;
  }, this);
  
  num = sum;
  return num;  
}

function deterPrimes(num){
   var flag = 0;
   for (var i = 2; i < num; i++){
       if (num % i === 0){ flag = 1;break;}  // 如果遇到一次能被其它数字整除，就表示该数不为质数，直接跳出循环
   }
   return flag;
}

sumPrimes(977);

//sumPrimes(10);
