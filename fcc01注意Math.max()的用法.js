/**
 * Created by chinecc on 2017/1/25.
 */
/*
* 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
 最小的数字并非总在最前面。
* */



function sumAll(arr) {
    var result = 0;
    var max,min;
    max = getMaxOfArray(arr);
    min = getMinOfArray(arr);
    for (var i = min; i <=max; i++){
        result += i;
        
    }
    return result;
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);  // Math.max() 参数默认是一组value,如果要使用数组为参数，需要通过apply来借用实现
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

sumAll([4, 1]);