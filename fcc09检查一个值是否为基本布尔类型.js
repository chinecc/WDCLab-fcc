/**
 * Created by chinecc on 2017/1/30.
 */
/*
* 检查一个值是否是基本布尔类型，并返回 true 或 false。
 基本布尔类型即 true 和 false。
*如果Boolean构造函数的参数不是一个布尔值,则该参数会被转换成一个布尔值.
* 如果参数是 0, -0,  null, false, NaN, undefined, 或者空字符串 (""),
* 生成的Boolean对象的值为false. 其他任何值,包括任何对象或者字符串"false", 都会创建一个值为true的Boolean对象.
*
* 任何值不为 undefined或者 null的对象, 包括值为false的Boolean对象, 在条件语句中,其值都将作为true来判断.例如
* */
/*
* 从输出的结果来看，Object.prototype.toString.call(变量)输出的是一个字符串，字符串里有一个数组，第一个参数是Object，
* 第二个参数就是这个变量的类型，而且，所有变量的类型都检测出来了，我们只需要取出第二个参数即可。
* http://www.xiabingbao.com/javascript/2015/07/04/javascript-type.html
*
* 老外答案：
* https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Boo-who
*
* return typeof(bool) == "boolean"
* 
* https://www.mariadcampbell.com/2016/06/25/boowho/
* */


function boo(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    var parameter = bool;
    switch (parameter){
        case true:
            bool = true;
            break;
        case false:
            bool =  true;
            break;
        default:
            bool = false;
    }
    return bool;
}

// boo(null);

// boo(true); // 应该返回 true。
//  boo(false); // 应该返回 true。
boo([1, 2, 3]); // 应该返回 false。
//  boo([].slice); // 应该返回 false。
//  boo({ "a": 1 }); // 应该返回 false。
//  boo(1); // 应该返回 false。
//  boo(NaN); // 应该返回 false。
//  boo("a"); // 应该返回 false。
//  boo("true"); // 应该返回 false。
//  boo("false"); // 应该返回 false
