/*
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，
也就是以连字符连接所有小写单词。
这是一些对你有帮助的资源:
RegExp
String.replace()

其他算法可以看这个网址
https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-spinal-tap-case/16078
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // var strArr = str.split(" ");
  // var newArr = [];
  // strArr.forEach(function(value,index,array){
  //   // newArr.push(value.toLowerCase());
  // });
  // str = newArr.join("-");
  // 上面的方法只能解决第一种情况，使用正则表达式可以完成全部情况的匹配

  //todo:使用正则来进行匹配

    var regex = /\s+|_+/g;// 这里的表达式是用来匹配非字符或_字符，+表示至少匹配1个或多个，*表示0或多次，？表示0或1次
    var regex2 = /([a-z])([A-Z])/g; // 这里的正则表达式是用来匹配第2种情况，把每个单词进行识别，因为每个单词之间是以小写和大写来区别
    str = str.replace(regex2,"$1 $2"); // 然后通过replace方法进行匹配重新生成新的str，这里的第二个参数"$1 $2",是指把匹配的结果按参数的样式存储，$1 $2表示()里面的匹配的字符

    // 第三步按照要求把每个单词匹配出来然后用"-"进行连接，然后把str整体大小写转换为小写
    str = str.replace(regex,"-").toLowerCase();

  return str;
}

//spinalCase('This Is Spinal Tap');

//spinalCase("This Is Spinal Tap");// 应该返回 "this-is-spinal-tap"。
//spinalCase("thisIsSpinalTap");// 应该返回 "this-is-spinal-tap"。
//spinalCase("The_Andy_Griffith_Show");// 应该返回 "the-andy-griffith-show"。
spinalCase("Teletubbies say Eh-oh");// 应该返回 "teletubbies-say-eh-oh"。
