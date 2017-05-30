/*
用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), 
setFirstName(first), setLastName(last), 
and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互.
*/
var Person = function(firstAndLast) {
    //var allNameArr = firstAndLast.split(" "); // 把传进入的参数分隔出来
    var allName = { first: firstAndLast.split(" ")[0], last: firstAndLast.split(" ")[1] };
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return allName.first;
    };
    this.getLastName = function() {
        return allName.last;
    };
    this.getFullName = function() {
        fullName = allName.first + " " + allName.last;
        return fullName;
    };
    this.setFirstName = function(first) {
        allName.first = first;
        return allName.first;
    };
    this.setLastName = function(last) {
        allName.last = last;
        return allName.last;
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        allName.first = (firstAndLast.split(" "))[0];
        allName.last = (firstAndLast.split(" "))[1];
    };
    // return firstAndLast;
};

var bob = new Person('Bob Ross');
//bob.getFullName();
//bob.setFirstName("wang");
bob.setFirstName("Haskell");
bob.getFullName(); // 应该返回 "Haskell Ross" after bob.setFirstName("Haskell").
//bob.getFullName();// 应该返回 "Haskell Curry" after bob.setLastName("Curry").