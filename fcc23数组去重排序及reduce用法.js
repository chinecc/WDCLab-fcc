/*
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 
而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 
对于传入的额外集合 (如 D = {2, 3}), 
你应该按归类前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Array.reduce()
Symmetric Difference

*/

function sym() {
  var arg = Array.prototype.slice.call(arguments);  // 这里的参数arguments 通过 slice 来进行数组化
 
  Array.prototype.indexOf = function(val){ // 传进来参数，返回该参数所在数组的index
    for (var i = 0; i < this.length; i++){
        if (this[i] === val) return i;
    }
    return -1;
  }

Array.prototype.remove = function(val){ // 传进来参数，删除数组内对应的val
    var index = this.indexOf(val);  // 先匹配查找是否在数组内存在val，返回index
    if (index > -1){
        this.splice(index,1);  // 进行删除操作
    }
}


  var newArg =  arg.reduce(function(prev,current){
    
    // 先把数组里面的数值去重
    if (prev.length > 0) {
        prev = removeDuplicates(prev);
        current = removeDuplicates(current);
    };
    // 遍历比较两组数据，吐出相同的值
    current.forEach(function(element) {
      
        if (prev.indexOf(element) === -1){
            prev.push(element);
        }else{
            //prev.pop(element);  // pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
            prev.remove(element);  // 如果相同的就吐出
        }
    }, this);
    return prev;
  });  // []可以不带,默认就是prev，数组第一个参数
  
  newArg.sort(function(a,b){  // 对数组里面的值进行排序
    return a - b;
  });
  return newArg;
  // return args;
}

// 数组内去重
function removeDuplicates(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        if (result.indexOf(arr[i]) === -1){  // 通过遍历要去重的数组里面的值进行判断是否与新数组重复，不重复就push进来生成结果
            result.push(arr[i]);
        }
    }
    return result;
}

//sym([1, 2, 3], [5, 2, 1, 4]);// 应该返回 [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]);// 应该只包含三个元素.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// 应该返回 [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// 应该只包含三个元素.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// 应该返回 [1, 4, 5].
//sym([1,1,2,5],[2,2,3,5]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// 应该只包含三个元素.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// 应该返回 [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// 应该只包含五个元素.
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// 应该返回 [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// 应该只包含八个元素.
