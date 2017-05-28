/*
让日期区间更友好！
把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).

如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了。
月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
例如:
makeFriendlyDates(["2016-07-01", "2016-07-04"]) 应该返回 ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]) 应该返回 ["July 1st, 2016", "July 4th, 2018"].

这里要分以下几种情况：
1. 两者区间里面的月份相同，则结束日期月份不用写月份, 如果是同一年份，年份也不用写
2. 结束日期与开始日期相差小于一年，则结束日期不用写年份
3. 开始日期年份是当前年份，且结束日期与开始日期小于一年，则结束日期年份不用写

*/

// 定义序数词
var ordinalNumber = ["st", "nd", "rd", "th"]; // 21st - twenty-first
// 定义月份
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function makeFriendlyDates(arr) {
    var resultArr = [];
    var strArr1 = strToNum(arr[0].split("-"));
    var strArr2 = strToNum(arr[1].split("-"));

    if (strArr1.year === strArr2.year && strArr1.month === strArr2.month && strArr1.day === strArr2.day) {
        // 如果两个日期相等，只输出一种情况，并立即返回
        resultArr.push(strMDY(strArr1, 3));
        return resultArr;
    }

    if (strArr1.year === strArr2.year) {
        if (strArr1.month === strArr2.month) { // 第一种情况，年份相同，月份也相同
            resultArr.push(strMDY(strArr1, 2));
            resultArr.push(strMDY(strArr2, 1));
        } else { // 第二种情况，年份相同，月份不同
            resultArr.push(strMDY(strArr1, 3));
            resultArr.push(strMDY(strArr2, 2));
        }
    } else { // 年份不同的情况
        //这里要对两个日期进行相减计算判断是不是小于365天或366天，小于就说明是一年内的，Date方法会自动判断闰年天数计算
        var date1 = new Date(strArr1.year, strArr1.month, strArr1.day);
        var date2 = new Date(strArr2.year, strArr2.month, strArr2.day);
        var day = (Number(date2) - Number(date1)) / (1000 * 60 * 60 * 24); // 计算两者之间的天数

        if (strArr1.month !== strArr2.month) { // 年份不同，且月份也不同的情况
            if ((day < 365)) { // 小于一年的情况
                resultArr.push(strMDY(strArr1, 2));
                resultArr.push(strMDY(strArr2, 2));
            } else { // 大于一年的情况
                resultArr.push(strMDY(strArr1, 3));
                resultArr.push(strMDY(strArr2, 3));
            }
        } else { // 年份不同，月份相同的情况
            if ((day < 365)) { // 小于一年的情况，为了精准，可以增加计算闰年，此处只按365天来算
                resultArr.push(strMDY(strArr1, 3));
                resultArr.push(strMDY(strArr2, 2));
            } else { // 大于一年的情况
                resultArr.push(strMDY(strArr1, 3));
                resultArr.push(strMDY(strArr2, 3));
            }
        }

    }
    return resultArr;
}

function strMDY(strObject, condition) { // 根据不同条件返回不同的日期组合,两个参数，第一个传进来日期对象
    switch (condition) {
        case 1: // 只返回一个day
            return switchDay(strObject.day);
        case 2: // 返回 month , day
            var strMonthAndDay = month[strObject.month - 1] + " "; // 取第一个参数里面的月份
            strMonthAndDay += switchDay(strObject.day);
            return strMonthAndDay;
        case 3: // 返回 month, day, year，格式 "September 5th, 2022"
            var strMonthAndDay = month[strObject.month - 1] + " "; // 取第一个参数里面的月份
            strMonthAndDay += switchDay(strObject.day);
            return strMonthAndDay + "," + " " + strObject.year;
        default:
            break;
    }

}

function switchDay(num) {
    switch (num) {
        case 1:
        case 21:
            return num + ordinalNumber[0];
        case 2:
        case 22:
            return num + ordinalNumber[1];
        case 3:
        case 33:
            return num + ordinalNumber[2];
        default:
            return num + ordinalNumber[3];
    }
}

function strToNum(arr) {
    // 年，月，日
    var yearNum = parseInt(arr[0], 10);
    var monthNum = parseInt(arr[1], 10); // 第二个参数代表进制数，不填可能在不同的系统会返回不同的值
    var dayNum = parseInt(arr[2], 10);
    return { "year": yearNum, "month": monthNum, "day": dayNum };
}

//makeFriendlyDates(["2016-07-01", "2016-07-04"]); // should return ["July 1st","4th"].
//makeFriendlyDates(["2016-12-01", "2017-02-03"]); // should return ["December 1st","February 3rd"].小于一年
//makeFriendlyDates(["2016-12-01", "2018-02-03"]); // should return ["December 1st, 2016","February 3rd, 2018"].超过一年
//makeFriendlyDates(["2017-03-01", "2017-05-05"]); // should return ["March 1st, 2017","May 5th"] 
//makeFriendlyDates(["2018-01-13", "2018-01-13"]); // should return ["January 13th, 2018"].  年份，月份，日期都相同
//makeFriendlyDates(["2022-09-05", "2023-09-04"]); // should return ["September 5th, 2022","September 4th"].  月份相同，年份不同
makeFriendlyDates(["2022-09-05", "2023-09-05"]); // should return ["September 5th, 2022","September 5th, 2023"].