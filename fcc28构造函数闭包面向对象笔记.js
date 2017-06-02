// 闭包测试
// function makeAdder(x) {
//     return function(y) {  // 返回一个函数，实现闭包
//         return x + y;
//     };
// }

// var add5 = makeAdder(5); // 这里的赋值是一个函数, makeAdder(x)函数 返回一个function(y)，这里的x = 5
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7  , 这里的y = 2
// console.log(add10(2)); // 12

/*
=============== 构造函数 ===================
JavaScript语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）

JavaScript语言使用构造函数（constructor）作为对象的模板。所谓“构造函数”，
就是专门用来生成“对象”的函数。它提供模板，描述对象的基本结构。一个构造函数，可以生成多个对象，这些对象都有相同的结构。

构造函数提供 模板，用来生成“对象”实例
为了与普通函数做区别，构造函数首字母大写
构造函数有两个特点： 
1. 函数体内使用this关键字，代表所要生成的对象实例
2. 生成对象的时候，必须使用new 命令来生成，
*/

// var Vehicle = function(p) { // 构造函数的构成，函数体内使用this关键字，表示所要生成的对象实例, 也可以带参数
//     this.price = p;
// };

// new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。下面两行代码是等价的。
//var v = new Vehicle(100); // 这里的new命令如果不填写，该构造函数就变为普通函数，函数里面的this就变为全局变量，会造成一些意外结果
// 为了保证构造函数和new一起使用，可以通过在构造函数内使用 ‘use strict’ 来定义为 严格模式，
// 严格模式下面，this不能指向全局，会弹提示文字提醒
//v.price;

// =============== this关键字用法 ===================
/*
1. 只要函数被赋给另一个变量，this的指向就会变。

this 的使用场合：

1. 在全局环境使用this，它指的就是顶层对象window。
2. 在构造函数中，构造函数中的this，指的是实例对象。

注意事项：
3. 由于this的指向是不确定的，所以切勿在函数中包含多层的this。
4.事实上，使用一个变量固定this的值，然后内层函数调用这个变量，是非常常见的做法，有大量应用，请务必掌握。
5. JavaScript 提供了严格模式，也可以硬性避免这种问题。在严格模式下，如果函数内部的this指向顶层对象，就会报错。
6. foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值。
   原因跟上一段的多层this是一样的，就是内层的this不指向外部，而指向顶层对象。
   解决这个问题的一种方法，是使用中间变量。如 var that = this， 把当前的this指针保存在一个变量里面，
   this的动态指向的问题需要特别注意
7. 回调函数中的this往往会改变指向，最好避免使用。
8. this的动态切换，固然为JavaScript创造了巨大的灵活性，但也使得编程变得困难和模糊。
有时，需要把this固定下来，避免出现意想不到的情况。JavaScript提供了call、apply、bind这三个方法，来切换/固定this的指向。
var obj = {};

var f = function () {
  return this;
};

f() === this // true
f.call(obj) === obj // true
上面代码中，在全局环境运行函数f时，this指向全局环境；call方法可以改变this的指向，
指定this指向对象obj，然后在对象obj的作用域中运行函数f。

call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
*/

// var n = 123;
// var obj = { n: 456 };

// function a() {
//     return this.n;
// }

// a.call(obj); // 这里的call 将改变 this的指向，指向 obj对象
/*
如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法。
*/
// var f = function() {
//     return this;
// };
// f.call(5);
/*
apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。
唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。
func.apply(thisValue, [arg1, arg2, ...])

1. JavaScript不提供找出数组最大元素的函数。结合使用apply方法和Math.max方法，就可以返回数组的最大元素。
2. 通过apply方法，利用Array构造函数将数组的空元素变成undefined。

空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined。
因此，遍历内部元素的时候，会得到不同的结果。

*/

// var a = [1, 3, 9, 5, 2, 10];

// return Math.max.apply(null, a); // 找出数组里的最大元素

// =============== bind方法 ===================
/*
bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。

bind比call方法和apply方法更进一步的是，除了绑定this以外，还可以绑定原函数的参数。
bind方法有一些使用注意点。

1. bind方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。

element.addEventListener('click', o.m.bind(o));// 这里每运行一次会返回一个新函数
element.removeEventListener('click', o.m.bind(o)); // 所以不能直接remove
可以通过
var listen = o.m.bind(0); // 把bind方法存储在一个变量里面进行

2. 回调函数是JavaScript最常用的模式之一，但是一个常见的错误是，将包含this的方法直接当作回调函数。


*/
// var add = function(x, y) {
//     return x + this.m + this.n + y;
// }

// var c = {
//     m: 2,
//     n: 3
// };

// var add2 = add.bind(c, 5); // bind的第一个参数用来指定绑定的对象，如果是null或undefined，那么this就是指向全局
// add2(6); // 这里参数只需要传入 y， 在上面的赋值里面已经传入了 x以及一个对象

// var d = new Date();
// d.getTime();

// //var c = d.getTime; // 这里的this指向发生了变化，不再是指向Date()对象实例，所以会报错
// var c = d.getTime.bind(d); // 这样就可以
// return c();

// =============== prototype 原型对象 ===================
/*
构造函数的缺点
1. 每个生成的对象实例当中的方法都是不同的， 会造成资源浪费

*/

// function Cat(name, age) { // 构造函数创建，函数名首字符大写
//     this.name = name; // 属性创建，this指向实例对象
//     this.age = age;
//     this.meomew = function() { // 实例的方法，就是一个函数
//         return "meomew,meomew"
//     }
// };

// var cat1 = new Cat(3, 2);
// var cat2 = new Cat(9, 2);
// var result = (cat1.meomew === cat2.meomew); //返回false 同一个构造函数的对象实例无法共享属性

/*
JavaScript的每个对象都继承另一个对象，后者称为“原型”（prototype）对象。只有null除外，它没有自己的原型对象。
原型对象上的所有属性和方法，都能被派生对象共享。这就是JavaScript继承机制的基本设计。

通过构造函数生成实例对象时，会自动为实例对象分配原型对象。
每一个构造函数都有一个prototype属性，这个属性就是实例对象的原型对象。
*/

function Animal(name) {
    this.name = name;
}

Animal.prototype.age = 10; // 每个构造函数都会有一个原型对象的属性，生成的实例对象会自动分配其原型对象 
// 原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有实例对象上。
Animal.prototype.walk = function() { // 匿名函数作为方法， walk定义为Animal的原型对象
    'use strict';
    return this.name + " is walking.";
}


/*
如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。
总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。
这也是它被称为原型对象的含义，而实例对象可以视作从原型对象衍生出来的子对象。
*/

var a1 = new Animal("WWW"); // 通过 构造函数  创建实例对象
var a2 = new Animal("BBB");
a1.age = 11;
a2.age;
a1.walk();
a2.walk();

/*
“原型链”的作用是，读取对象的某个属性时，JavaScript引擎先寻找对象本身的属性，
如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。
如果直到最顶层的Object.prototype还是找不到，则返回undefined。

如果对象自身和它的原型，都定义了一个同名属性，   // 这里和作用域一样，会优先读取对象自身的属性，如果对象本身和原型有同名属性
那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

需要注意的是，一级级向上，在原型链寻找某个属性，对性能是有影响的。 // 相当于递归回调一层一层向上找
所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

每个原型对象prototype都会带有一个constructor属性，指向prototype对象的构造函数

constructor属性的作用，是分辨原型对象到底属于哪个构造函数。

由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。


// =============== instanceof运算符 ===================

instanceof运算符返回一个布尔值，表示指定对象是否为某个构造函数的实例。

instanceof运算符的左边是实例对象，右边是构造函数。它的运算实质是检查右边构建函数的原型对象，是否在左边对象的原型链上。

v instanceof Veicule

除了上面这种继承null的特殊情况，JavaScript之中，只要是对象，
就有对应的构造函数。因此，instanceof运算符的一个用处，是判断值的类型。
注意，instanceof运算符只能用于对象，不适用原始类型的值。

// =============== in运算符和 for...in 循环 ===================


in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。
获得对象的所有可枚举属性（不管是自身的还是继承的），可以使用for...in循环。
*/

// =============== 构造函数的继承 ===================

function Shape() { // 创建构造函数 Shape
    this.x = 0;
    this.y = 0;
};

Shape.prototype.move = function(x, y) { //创建 构造函数Shape的原型对象 move方法
    this.x += x;
    this.y += y;
    console.log("shape moved");
};

function Rectangle() {
    Shape.call(this); // 调用父类构造函数 Shape，
}

// 让Rectangle的子类继续父类原型
Rectangle.prototype = Object.create(Shape.prototype); // 让父类的原型对象 赋值给 子类Rectangle的原型对象 
/*
上面代码中，Rectangle.prototype是子类的原型，要将它赋值为Object.create(Shape.prototype)，
Shape.prototype。否则后面对Rectangle.prototype的操作，会连父类的原型Shape.prototype一起修改掉。

*/
Rectangle.prototype.constructor = Rectangle; // 让原型对象的构造函数属性指向 子类

var rect = new Rectangle();
rect.move(1, 1) // 使用父类的方法，继承了父类原型对象里面的 move方法

// =============== 模块化 ===================
/*
模块是实现特定功能的一组属性和方法的封装。

1. 我们可以利用构造函数，封装私有变量。
2. 使用“立即执行函数”（Immediately-Invoked Function Expression，IIFE），
将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的。
*/

// var moudule1 = (function(){
//     var count = 0;
//     var m1 = function(){

//     };
//     var m2 = function(){

//     };
//     return {m1:m1,m2:m2};
// })();
// 使用上面的写法，外部代码无法读取内部的_count变量。
/*
如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，
这时就有必要采用“放大模式”（augmentation）。
就是在立即执行函数里面带上参数
*/

var moudule1 = (function(mod) {
    mod.m3 = function() {

    };
    return mod;
})(moudule1);

// 上面就通过 传入 module1,然后在函数内创建一个新的m3方法，然后重新返回给module1

/*
立即执行函数还可以起到命名空间的作用。

*/