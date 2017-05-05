/*
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。

Array.isArray()
*/
function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  var tmpArr;
  arr.forEach(function(element) {  // 遍历arr整个数组
      //console.log(element);
      if (Array.isArray(element)){ // 对arr里面的元素进行判断是否为数组，如果是就进行嵌套判断
         newArr = getElement(element,newArr); 
         // 通过getElement函数进行嵌套判断,同时传两个参数，一个为当前元素，一个为不包含嵌套数组元素的newArr
      }else{
        newArr.push(element);  // 如果不是数组，就把当前的元素值直接push到newArr新数组里面
      }
  }, this);
  arr = newArr;
  return arr;
}

function getElement(arr,newArr){
   for (var i = 0; i < arr.length; i++){ //遍历传递过来的arr的数组，获取每个元素值
       if (Array.isArray(arr[i])) { // 判断元素值是否继续存在数组
          getElement(arr[i],newArr);   // 如果继续存在数组，继续嵌套判断执行，
       }else{ 
           newArr.push(arr[i]);  // 遇到不是嵌套的数组元素后，把当前元素值push到newArr里面
       }
   }
   return newArr;
}

//steamroller([1, [2], [3, [[4]]]]);

//steamroller([[["a"]], [["b"]]]);// 应该返回 ["a", "b"]。
//steamroller([1, [2], [3, [[4]]]]);// 应该返回 [1, 2, 3, 4]。
steamroller([1, [], [3, [[4]]]]);// 应该返回 [1, 3, 4]。
//steamroller([1, {}, [3, [[4]]]]);// 应该返回 [1, {}, 3, 4]。