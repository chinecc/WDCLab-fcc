/*
如果传入字符串是一个有效的美国电话号码，则返回 true.
用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
在本节中你会看见如 800-692-7753 or 8oo-six427676;laskdjf这样的字符串. 
你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 
如果字符串中给出了国家代码, 你必须验证其是 1. 如果号码有效就返回 true ; 否则返回 false.

splice() 方法会直接对数组进行修改
*/
function telephoneCheck(str) {
  
  var reg = /(^-)\d*|\d|\(?\d*\)?/g;  // ^代表匹配行首 ?代表匹配一次，匹配出来的字符里面包括数字，括号和首字符为-的数字
  var newStr = str.match(reg);
  newStr = (newStr.join("")).split("");

  var strLength = newStr.length;
  var checkNum = function(strArr){  // 检测数组里面是否全部为数字
      var i = 0;
      strArr.forEach(function(element) {
          if (parseInt(element)>=0 && parseInt(element)<=9){
              i++;
          }
      }, this);
      return i;
  }

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

  // 接下去就是根据几种情况进行判断
  if (strLength === 10){   // 长度为10个数字，是第一种情况为true
      if (checkNum(newStr) ===10){
        return true;
      }
  }else if (strLength === 11){  // 长度为11
      if (parseInt(newStr[0]) === 1){  // 首数字国家代码必须为 1 
         if (checkNum(newStr)===11){
             return true;
         }
      }else{
        return false;
      }
  }else if(strLength === 12){
      if (newStr[0] === "(" && newStr[4] === ")"){ // 这里只判断了前面括号是不是符号格式标准，为了严谨一些还需要判断除括号外的其他字符是不是数字
          newStr.remove("(");
          newStr.remove(")");
          if (newStr.length === 10){
              return true;
          }
        }
  }else if (strLength === 13){
      if (parseInt(newStr[0]) === 1 && newStr[1] === "(" && newStr[5]=== ")"){
          newStr.remove("(");
          newStr.remove(")");
          if (newStr.length === 11){
            return true;
          }
      }
  }else{
      return false;
  }
  return false;
}


// telephoneCheck("555-555-5555");// 应该返回true.
//telephoneCheck("1 555-5(5-5555");// 应该返回 true.
//telephoneCheck("1 (555) 555-5555");// 应该返回 true.
// telephoneCheck("5555555555");// 应该返回 true.
// telephoneCheck("555-555-5555");// 应该返回 true.
//telephoneCheck("(555)555-5555");// 应该返回 true.
 telephoneCheck("1(555)555-5555");// 应该返回 true.
// telephoneCheck("1 555)555-5555");// 应该返回 false.
// telephoneCheck("1 555 555 5555");// 应该返回 true.
// telephoneCheck("1 456 789 4444");// 应该返回 true.
// telephoneCheck("123**&!!asdf#");// 应该返回 false.
// telephoneCheck("55555555");// 应该返回 false.
// telephoneCheck("(6505552368)");// 应该返回 false
// telephoneCheck("2 (757) 622-7382");// 应该返回 false.
// telephoneCheck("0 (757) 622-7382");// 应该返回 false.
// telephoneCheck("-1 (757) 622-7382");// 应该返回 false
// telephoneCheck("2 757 622-7382");// 应该返回 false.
// telephoneCheck("10 (757) 622-7382");// 应该返回 false.
// telephoneCheck("27576227382");// 应该返回 false.
// telephoneCheck("(275)76227382");// 应该返回 false.
// telephoneCheck("2(757)6227382");// 应该返回 false.
// telephoneCheck("2(757)622-7382");// 应该返回 false.
// telephoneCheck("555)-555-5555");// 应该返回 false.
// telephoneCheck("(555-555-5555");// 应该返回 false.