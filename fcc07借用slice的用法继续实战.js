/**
 * Created by chinecc on 2017/1/29.
 */
/*
* DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
 Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
 在每一个数组中将给定的字母作为第一个碱基返回。
 例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
* */

/*
* pair("ATCGA") 应该返回 [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]。
* * 就是把每一个字符配对组合为  AT 或 TA ，或CG 或 GC
* */
/*
* Array.push()
 String.split()
* */
function pair(str) {
    // 先把传进来的str 拆开变成数组
    // var pairChar = Array.prototype.slice.call("ATCG"); // pairChar[0] = "A",pairChar[1] = "T",pairChar[2] = "C",pairChar[3] = "G",
    var strArr = Array.prototype.slice.call(str); // 拆出传进来的str变为数组 G C G
    var newArr = [];
    strArr.forEach(function (value,index,arr) {
       var tmpArr = [];
       switch (value){  // 根据规则，进行组合
           case "A":
               tmpArr.push("A");
               tmpArr.push("T");
               break;
           case "T":
               tmpArr.push("T");
               tmpArr.push("A");
               break;
           case "C":
               tmpArr.push("C");
               tmpArr.push("G");
               break;
           case "G":
               tmpArr.push("G");
               tmpArr.push("C");
               break;
       }
       newArr.push(tmpArr); // 把每一个字符组合出来的数组 push到 新数组里
    });
    str = newArr;
    return str;
}

// pair("GCG");
pair("ATCGA");