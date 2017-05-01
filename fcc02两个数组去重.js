/**
 * Created by chinecc on 2017/1/26.
 */
/*
* 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。
* 换言之，返回两个数组的差异。
* Comparison Operators
 Array.slice()
 Array.filter()
 Array.indexOf()
 Array.concat()
* */

function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var tmpArr = [];
    tmpArr = arr1.concat(arr2); // 先把两组数组合并在一起，然后逐个元素与剩下的字符进行比较，判断是不是有相同存在，不存在就concat到新数组里面
    var element;
    for (var i = 0; i < tmpArr.length; i++){
        element = tmpArr[i];  // 取每一个元素与其他元素进行比较

        var sliced;
        if (i === 0){
            sliced = tmpArr.slice(1); // 分割出当前index后面的所有元素，应该是分割出除当前index之外的所有元素,如果是第一个元素，就是从1到最后
        }else if (i === tmpArr.length -1){
            sliced = tmpArr.slice(0,i-1);// 如果是最后一个元素，就是分割从0到最后的前一个元素,这里的i记录是总的元素-1就是最后前一个
        }else{
            var sliced1 = tmpArr.slice(0,i);  // begin,  end不包括在内
            var sliced2 = tmpArr.slice(i+1);  // end不写，默认到最后
            sliced = sliced1.concat(sliced2);
        }

        if (sliced.indexOf(element) === -1){   // 比较是不是在sliced里面存在相同元素, -1表示不存在
            newArr.push(element);  //如果不存在就表明是独有元素， 进行push操作到newArr
        }
    }

    // tmpArr = (arr1.length > arr2.length) ? arr2 : arr1;  三元条件运算符
    // if (arr1.length > arr2.length){  // 如果arr1的长度大于arr2，进行交换，让arr1始终保持最小长度。
    //     // 这里发现有一个问题，如果arr1里面的元素在arr2里面都存在，这种算法就没办法找出不同的元素。
    //     tmpArr = arr1;
    //     arr1 = arr2;
    //     arr2 = tmpArr;
    // }
    // 开始进行判断比较
    // var element;
    // for (var i = 0; i < arr1.length; i++){
    //     element = arr1[i];
    //     // if (arr2.indexOf(element) == -1){
    //     //
    //     // };
    // }

    return newArr;
}

diff([1, "calf", 3, "piglet"], [7, "filly"]);

// diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);