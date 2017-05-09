/*
传入二进制字符串，翻译成英语句子并返回。
二进制字符串是以空格分隔的。
1. parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
parseInt(string, radix);
-> 作用为 将string字符串 转换为 整数,radix 参数指定string为多少进制的数
要被解析的值。如果参数不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt

2. 静态 String.fromCharCode() 方法返回使用指定的Unicode值序列创建的字符串。
3. String.charCodeAt()
str.charCodeAt(index)
返回值是一表示给定索引处字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。
4. split() 方法将一个String对象分割成字符串数组，通过将字符串分成子串。
*/
function binaryAgent(str) {
  var strArr = str.split(" ");
  var newStrArr = [];
  var newElement;
  strArr.forEach(function(element) {
      newElement = String.fromCharCode(parseInt(element,2));
      newStrArr.push(newElement);
  }, this);
  str = newStrArr.join("");
  return str;
}

//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// 应该返回 "Aren't bonfires fun!?"

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
// 应该返回 "I love FreeCodeCamp!"