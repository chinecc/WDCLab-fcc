/**
 * Created by chinecc on 2017/1/31.
 */
/*
* 写一个 function，传入两个或两个以上的数组，
* 返回一个以给定的原始数组排序的不包含重复值的新数组。
*
* 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
* 这是一些对你有帮助的资源:
 Arguments object
 Array.reduce()

 indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。

*
* unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]。
*
* unite([1, 3, 2], [1, [5]], [2, [4]]) 应该返回 [1, 3, 2, [5], [4]]
*
* unite([1, 2, 3], [5, 2, 1]) 应该返回 [1, 2, 3, 5]
*
* unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 应该返回 [1, 2, 3, 5, 4, 6, 7, 8]
* */

function unite(arr1, arr2, arr3) {
    var args = Array.prototype.slice.call(arguments);  // 获取传进来的参数，成为数组

    return args.reduce(function(acc,curr){
        // reduce用法(两个参数callback,initialValue),  reduce(function(acc,curr),[]);第一参数为一个回调函数
        // callback回调函数带四个参数，上回调用的返回值或初始值accumulator，是传进来数组里面的值进行计算，
        //当前正在处理的值currentValue, 正在处理的元素的索引currentIndex,
       // initialValue初始值为非必填项，如果存在是作为callback参数的第一个参数进行 accumulator的第一个值
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        // todo:加上详细注释
        // 此处的 reduce 会先传进来两个数值，acc为第一个数值，因为有initialValue参数[]，所以acc的第一个值为[],index是从0开始,
        // 所以 curr的值为 args[0]
        
        curr.forEach(function(x){   // 这里对 curr上面的值进行 遍历，与acc的值进行判断是否存在相同,不相同就吐出保存起来，
            // 第一次相当于是把 curr的值 传一遍给 acc
            // 第二次循环进来，acc的值为 [1,3,2], curr的值为 [5,2,1,4]
            // 然后在进行遍历curr，如果值不在 acc里面，那么就push到acc上，顺序出来就是 [1,3,2,5,4]
           if (acc.indexOf(x) === -1){
               acc.push(x);
           }
       });
        return acc;
    },[]);

    //return arr1;
}

// unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

unite([1, 3, 2], [1, [5]], [2, [4]]);