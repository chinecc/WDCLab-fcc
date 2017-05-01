/**
 * Created by chinecc on 2017/1/28.
 */
/*
* 把指定的字符串翻译成 pig latin。
 Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
* Array.indexOf()
 Array.push()
 Array.join()
 String.substr()
 String.split()
* */

/*
* 在英语26个字母里面，元音字母有5个，是A、E、I、O、U，
* 辅音字母有20个，分别是B、C、D、F、G、H、J、K、L、M、N、P、Q、R、S、T、V、W、X、Z.
* 还有一个是半无音的Y，所谓的半元音其实就是非元音
* 辅音丛：sl,bl,cl,fl,gl,pl,br,cr,dr,fr,gr,tr,st,sk,sw
* */
// 元音开头，只需要在词尾加上 way
/*
* 辅音字母开头，需要把辅音移到词尾， 加上 ay
* 辅音丛开头，需要把辅音丛移到词尾， 加上 ay
* */
function translate(str) {
    var yuanYin = Array.prototype.slice.call("aeiou");  // 元音
    var fuYincong = ["sl","bl","cl","fl","gl","pl","br","cr","dr","fr","gr","tr","st","sk","sw"]; // 辅音丛
    var strHead = str.substr(0,2);   // 取str上面的前两位进行判断
    var strArr = Array.prototype.slice.call(str); // 把传进来的参数str进行分割为数组，借用slice方法
    var newStr = [];  // 用来存储重新组合后的字符
    var status = 0;
    //1. 先判断词首是否为辅音丛
    fuYincong.forEach(function(value,index,arr){
        if (value === strHead){
            // 把 strHead 移到词尾，然后加上 ay
            strArr.push(strHead);
            strArr.push("ay");
            newStr = strArr.slice(2);
            status = 1; // 记录传进来的参数为 带辅音丛
        }
    });
    //2. 判断词首是否为元音
    var strHeadOne = str.substr(0,1).toLowerCase(); // 取str的前1位字符,同时将其转化为小写
    if (status === 0){
        yuanYin.forEach(function (value, index, arr) {
            if (value === strHeadOne){  // 如果匹配，说明是 元音，根据规则，只需要在str尾部追加上 way
                strArr.push("way");
                newStr = strArr;
                status = 2; // 记录传进来的参数为 带元音的字符串
            }
        });
    }
    // 2.1 判断词首是否为 辅间
    if (status != 2 && status != 1){
        {  // 如果不匹配，说明是 辅音,根据规则，移到尾部，然后加上 ay
            strArr.push(strHeadOne);
            strArr.push("ay");
            newStr = strArr.slice(1); // 把第1个辅音去掉，生成新的组合后的 最终结果
        }
    }
    str = newStr.join('');
    return str;
}

// translate("consonant");
 translate("glove");
// translate("california");
// translate("algorithm");