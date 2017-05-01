/**
 * Created by chinecc on 2017/1/27.
 */
/*
* 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
* 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
*
* Array.splice()   // 删除指定位置的值或添加进行替换
 String.replace()
 Array.join()  // 把数组里面的值连接成为 字符串
 String.charCodeAt()  // 用它来判断是否为大小写，返回值是一表示给定索引处字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。

 * */

/*
* myReplace("Let us go to the store", "store", "mall")
*
* 应该返回 "Let us go to the mall"。
* */

function myReplace(str, before, after) {
    var strArr = str.split(" ");  // 将字符串 按 " "为间隔符分割出 数组
    var cindex;
    var status = 0;  // 用来记录是否有匹配到 before 在str里面

    strArr.forEach(function(value,index,arr){
        if (value === before){
            cindex = index;
            console.log(arr);
            status = 1;
        }
    });
    if (status){  // 如果有匹配掉，开始进行替换，这里需要判断被替换的字符串的原单词的大小写问题
        var word = strArr[cindex];
        var newWord = Array.prototype.slice.call(word);
        var char = newWord[0];
        var name,newAfter;
        var charNum = char.charCodeAt(0);
        // 大写 A-Z  65 - 90   小写 a-z  97 - 122
        if (charNum >=65 && charNum <=90){
            // 大写
            // 把要替换的字符串首字母变大写 , 用str.replace(regex,replacement), 用正则表达式来做替换
            name = after;
            newAfter = name.replace(/\b\w+\b/g, function(cword){
                return cword.substring(0,1).toUpperCase()+cword.substring(1);}
            );

        }else if (charNum >=97 && charNum <=122){
              // 小写
            name = after;
            newAfter = name.replace(/\b\w+\b/g, function(cword){
                return cword.substring(0,1).toLowerCase()+cword.substring(1);}
            );
        }
        // console.log(before,after,newAfter);
        strArr[cindex] = newAfter;
        str = strArr.join(" "); // 重新组合成新的替换后的字符串返回
    }
    return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");