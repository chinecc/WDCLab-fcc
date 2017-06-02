/*
扩展内建对象
*/
/*
1. PHP中有一个叫做in_array()的函数，主要用于查询数组中是否存在某个特定的值，
JavaScript中没有一个叫做inArray()的方法，
我们可以通过Array.prototype来扩展实现一下
*/

// Array.prototype.inArray = function(needle) {
//     // 每个构造函数都有它对应的prototype原型对象，他可以被基于该构造函数创建的实例对象共享其方法和属性，原型对象这边的方法或属性如果修改，
//     // 其基于该原型的所有实例对象相应的调用也会同时修改掉
//     for (var i = 0, len = this.length; i < len; i++) { // 这里的this 是指向当前调用
//         if (this[i] === needle) {
//             return true;
//         }
//     }
//     return false;
// }

// var a = [1, 3, 4, "red", "black"];
// a.inArray(3);

/*
2. 让String对象也有reverse()方法，数组是有reverse()方法的。 
可以通过借用数组的该方法进行扩展，通过对String对象的原型添加reverse()方法。
*/

String.prototype.reverse = function() {
    var str = this;
    var newStr = Array.prototype.reverse.call(str.split(""));
    // 把 传进来的字符串拆解为数组，然后借用Array的reverse方法进行反向排序，
    return newStr.join(""); // 然后把反向排序后的新数组newStr连接起来转为字符输出结果
}

var str = "Chinese";
return str.reverse();