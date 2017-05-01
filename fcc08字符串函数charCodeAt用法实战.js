/**
 * Created by chinecc on 2017/1/29.
 */
/*
* 从传递进来的字母序列中找到缺失的字母并返回它。
 如果所有字母都在序列中，返回 undefined。
* */
/*
* String.charCodeAt()
 String.fromCharCode()
* */
/*
* fearNotLetter("abce") 应该返回 "d"。
* fearNotLetter("abcdefghjklmno") 应该返回 "i"。
* fearNotLetter("bcd") 应该返回 undefined
*
* 大写 A-Z  65 - 90   小写 a-z  97 - 122
*/
function fearNotLetter(str) {
    var strArr = Array.prototype.slice.call(str);
    var newStr;
    var strArrIndex = 0; // 用来记录strArr的index
    var manqueCharCode = 0;

    var headNum = strArr[0].charCodeAt(0);  // 获取第一个字符的ascii码值
    var endNum = strArr[strArr.length-1].charCodeAt(0); // 获取最后一个字符的ascii码值
    for (var i = headNum; i <= endNum; i++){  // 从第一个字符到第二字符之间逐个与 str比较，如果不相等，说明是缺失的那个字母，把它记录下来，然后进行转化输出
        if (strArr[strArrIndex].charCodeAt(0) != i){
            manqueCharCode = i;    // 这里只假设传进来的str里面只缺失一个字符的情况
            strArrIndex--;  // 这里找到缺失的字符后，需要退回一个index，在进入下一个循环
        }
        strArrIndex++;
    }

    if (manqueCharCode !== 0) {
        newStr = String.fromCharCode(manqueCharCode);
    } else{
        newStr = undefined;
    }
    str = newStr;
    return str;
}

// fearNotLetter("abce");
// fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");