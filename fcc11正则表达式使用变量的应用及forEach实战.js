/**
 * Created by chinecc on 2017/2/13.
 */
/*
* 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
* HTML实体 对应的字符为：
*
* &     &amp;
* <     &lt;
* >     &gt;
* "     &quot;
* '     &apos;
*
* */

function convert(str) {
    // &colon;&rpar;
    var pattern = ['&','<','>','"',"'"];
    var replace = ['&amp;','&lt;','&gt;','&quot;','&apos;'];
    var regex;
    pattern.forEach(function (value,index) {
        // console.log(value,index);
        regex = new RegExp(value,"g");  // 这里通过定义正则对象，可以使用变量，如果用字面量定义，不会被解析
        str = str.replace(regex,replace[index]);
    });
    // var reg = /&/g;
    // str = str.replace(reg,"&amp");

    return str;
}

//convert("Dolce & Gabbana");

convert("Hamburgers < Pizza < Tacos");// 应该返回 Hamburgers &​lt; Pizza &​lt; Tacos。
//convert("Sixty > twelve");// 应该返回 Sixty &​gt; twelve。
//convert('Stuff in "quotation marks"');// 应该返回 Stuff in &​quot;quotation marks&​quot;。
//convert("Shindler's List");// 应该返回 Shindler&​apos;s List。
//convert("<>");// 应该返回 &​lt;&​gt;。
//convert("abc");// 应该返回 abc。