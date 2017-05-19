/*
设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 
付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
cid 是一个二维数组，存着当前可用的找零.
当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".
否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
*/
// function checkCashRegister(price, cash, cid) {
//   var change;
//   // Here is your change, ma'am.
//   return change;
// }

// Example cash-in-drawer array:
// [["PENNY", 1.01],  // 1分  0.01
// ["NICKEL", 2.05],  // 5分  0.05
// ["DIME", 3.10],    // 1角  0.10
// ["QUARTER", 4.25], //      0.25
// ["ONE", 90.00],    // 1元
// ["FIVE", 55.00],   // 5元
// ["TEN", 20.00],    // 10元
// ["TWENTY", 60.00], // 20元
// ["ONE HUNDRED", 100.00]]  // 100元

// 定义货币的面值
var mianEr = [
    {name:"ONE HUNDRED",val:100},
    {name:"TWENTY",val:20},
    {name:"TEN",val:10},
    {name:"FIVE",val:5},
    {name:"ONE",val:1},
    {name:"QUARTER",val:0.25},
    {name:"DIME",val:0.10},
    {name:"NICKEL",val:0.05},
    {name:"PENNY",val:0.01}
    ];

function checkCashRegister(price, cash, cid) {
   // 记录要找给的零钱
   var change = cash - price; // 付款价格 减去 购买价格

   // 记录 cid 收银机里面的钱总数，以及各面额的钱
   var cidTotal = cid.reduce(function(acc,curr){  // acc当前值，curr要被叠加进来的值，cid是一个数组，遍历叠加计算
    acc.total += curr[1];
    acc[curr[0]] = curr[1]; // 把curr数值里面的两个元素 存储为 Object对象，acc[curr[0]],对象只有采用这种方式才能用变量
    return acc;
    },{total:0});// 用total记录总额，citTotal里面的对象存储结构 {total:999,PENNY:1 ...}

    // 判断要找给的零钱和 收银机里面的总数是不是相等或者不足
    if (change > cidTotal.total){  // 不足
        return "Insufficient Funds";
    }else if (change === cidTotal.total){  // 相等
        return "Closed";
    }else{  // 足够
        // 收银机里面的钱 足够支付 要找的零钱 change > cidTotal.total
        var change_arr = mianEr.reduce(function(acc,curr){ // curr的参数会遍历进来数值里面的下一个要比较的元素
            // 遍历 各面额值，计算出cid收银机里面要找的零钱及对应的面额,从大到小进行计算
            // 结果返回的是一个 数组，记录相应的面额以及要找的钱
            var value = 0;
            while (cidTotal[curr.name] > 0 && change >= curr.val){ // 第一次acc的值为空数值不会进入该循环
                // 循环判断收银机里面存储的找零的总数对象对应的面额cidTotal[acc.name]一直是大于0状态，
                // 说明还需要继续找接下去的面额进行判断比较
                // 如果小于0 说明比较已经结束，同时 整个要找的零钱要扣除 当前循环的面额的钱，并把扣除的钱进行记录存储在acc上面
                change -= curr.val;  // 把要找零的总数 从当前循环符合条件的面额值 扣除，继续循环
                cidTotal[curr.name] -= curr.val; 
                // 同时在记录要找零的总数的钱包里面 把对应的相应面额的值也扣除，继续循环，扣除后循环的条件已经对应的发生了改变
                value += curr.val; // 这里同时把 符合条件的当前面额对应的值记录下来
                
                change = Math.round(change * 100)/100; // 四舍五入取小数点两位，继续循环

            }
            // 循环结局，如果value值发生变化，说明当前的面额符合条件，就是我们要获取的找零的面额及对应的数量
            if (value > 0){
                acc.push([curr.name,value]); 
                // acc本身是一个数组对象，这里把符合条件的当前判断的面额curr及对应的要找的钱存进来
            }
            return acc;
        },[]);
    }

    // 最后判断获取的change_arr的值是否符合条件，如果不符合表明收银机里金额 不足
    if (change_arr.length < 1 || change > 0){
                return "Insufficient Funds"; 
    }
    return change_arr;
}


 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// 应该返回一个数组.
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// 应该返回一个字符串.
// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// 应该返回 [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// 应该返回 "Insufficient Funds".
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// 应该返回 "Insufficient Funds".
// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// 应该返回 "Closed".