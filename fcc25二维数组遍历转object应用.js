/*
依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 
如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 
返回当前的库存数组，且按货物名称的字母顺序排列.

*/
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // 把数组转对objet，易读一些
    // [21,"Bowling Ball"] => {num:21,name:"Bowling Ball"}
    var curInv = arrayToObject(arr1); // curInv 库存
    var newInv = arrayToObject(arr2); // newInv 新增
    // 判断 新增的货物newInv 是否已经在 库存curInv 中存在，如果存在 则更新数量，如果不存在，则把新增的货物添加到库存curInv中
    newInv.forEach(function(element) {  // 遍历 新增的库里面的元素 与 库存里面的库判断比较
        var newInvName = element.name;
        var newInvNum = element.num;
        var flag = 0;
        curInv.forEach(function(element){   // 把每个 新增库里面的元素与 库存里面的元素比较
            if (newInvName === element.name){ // 如果 当前新增库元素 在 库存里面存在，
                element.num += newInvNum;   // 则 直接把 库元素对应的数量 更新
                flag = 1;
            }
        });
        if (flag === 0){
            curInv.push(element);
        }
    }, this);

    // 对 curInv 库存里面的货物按字母名称排序
    curInv.sort(function(a,b){
         return (a.name > b.name)?1:-1;
    });

    // 把 object 转换为 arr
    curInv = objectToArray(curInv);
    return curInv;
}

function objectToArray(arr){
    var newArr = [];
    arr.forEach(function(element,index) {
        newArr[index] = [element.num,element.name];
    }, this);

    return newArr;
}

function arrayToObject(arr){
    var obj = new Object();
    var newArr = [];
    var i = 0;
    arr.forEach(function(element,index) {
        obj.num = element[0];
        obj.name = element[1];
        newArr[index] = obj;
        obj = {};
    }, this);
    return newArr;
}

//updateInventory(curInv, newInv);


// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length;// 应该返回一个长度为6的数组.
 updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);// 应该返回 [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);// 应该返回 [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);// 应该返回 [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);// 应该返回 [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].