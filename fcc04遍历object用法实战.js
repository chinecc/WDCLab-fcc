/**
 * Created by chinecc on 2017/1/27.
 */
/*
* 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组
* 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
* */

/*collection:
* [{ "a": 1, "b": 2 },
* { "a": 1 },
* { "a": 1, "b": 2, "c": 2 }],
*
* source:
* { "a": 1, "b": 2 }
*
* 返回：[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
* */
/*
* Global Object
 Object.hasOwnProperty()
 Object.keys()
* */

function where(collection, source) {
    var arr = [];
    // What's in a name?
    collection.forEach(function (value) { // 遍历collection上面的每个对象，value这里是 数组里面的每个元素对象，是一个object对象
        // var keys = Object.keys(value);  // 这里返回每个元素对象的keys，返回为数组
        // keys.forEach(function(key){
        //     console.log(key,value[key]);  // 这里就输出每个元素对象的key和value
        // });
        var sourceKeys = Object.keys(source);   // 获取source里面元素的key，返回为数组，需要匹配整个数组里面的元素值才算匹配成功
        var result = true;

        for (var i=0; i < sourceKeys.length; i++){
            if (!value.hasOwnProperty(sourceKeys[i])){
                result = false;
            }
        }
        var status = 0;
        if (result){
            sourceKeys.forEach(function(val){
                if (source[val] === value[val]) {status = 1;}
                   else {status = 0;}
            });
            if (status === 1) arr.push(value);
        }
    });
    return arr;
}

// where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 3 }], { "a": 1, "c": 2 });