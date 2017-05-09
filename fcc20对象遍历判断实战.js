/*
完善编辑器中的every函数，
如果集合(collection)中的所有对象都存在对应的属性(pre)，
并且属性(pre)对应的值为真。函数返回ture。反之，返回false。//必须所有的元素对应的值为真才能返回真

提示：你可以有多种实现方式，最简洁的方式莫过于Array.prototype.every()。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
function every(collection, pre) {
  // Is everyone being true?
  var result;
  var value;
  var flag = 1;  // 标记判断是否所有的返回都是true
  collection.forEach(function(element) { //遍历collection中的所有对象，每个对象是在element里面
      value = element[pre];
      if (element[pre]){ // 取element的value 进行判断是否为真
          result = true;
      }else{
          result = false; 
          flag = 0;
      }
  }, this);
  if (flag){ // 只要所有的标记都是真就返回 result 
    pre = result;
  }else{
      pre = false; // 否则返回fase
  }
  return pre;
}

//every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// 应该返回 true

//every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// 应该返回 false。

//every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
// 应该返回 false

//every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
// 应该返回 false

//every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
// 应该返回 true

//every([{"single": "yes"}], "single");// 应该返回 true

//every([{"single": ""}, {"single": "double"}], "single");
// 应该返回 false

//every([{"single": "double"}, {"single": undefined}], "single");
// 应该返回 false

every([{"single": "double"}, {"single": NaN}], "single");
// 应该返回 false