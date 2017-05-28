/*
把一个字符串中的字符重新排列生成新的字符串，
返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准

例如, aab 应该返回 2 
因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 
但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
*/

function permAlone(str) {
    var chars = str.split(""); // 把字符串分隔为 数组
    var perms = []; // 用来存储排列后的结果
    var count = 0; // 记录一下递归中循环执行的次数

    function constructPermutation(usable, perm) { // 两个参数，usable要进行排列的数据，perm排列后的字符串
        if (perm.length === str.length) {
            // 如果perm字符串长度和 str相同，排列完成，存入perms里面，这里如果是在递归里面，会继续执行返回上一层调用处，而不是直接结束
            perms.push(perm);
        } else { // 对 usable数据进行排列，输出到perm里
            var usableLength = usable.length;
            for (var i = 0; i < usableLength; i++) { // 外层循环，如果有3个字符，产生6个值
                var leftUsable = [];
                for (var j = 0; j < usableLength; j++) { // 内层循环，每一次取一个字符出来，然后剩余字符进行组合排列
                    if (i != j) { // 外层当前位置和内置当前的usable的值不同，就吐出字符到leftUsable里面继续循环排列
                        leftUsable.push(usable[j]); // 这里就是取当前位置i以外的字符 存入 leftUsable继续进行排列
                    }
                    count++;
                }
                var permUsable = perm + usable[i];
                constructPermutation(leftUsable, permUsable);
                // 进入递归，对吐出来的leftUsable的值继续进行排列，直到perm的值长度和str相等，才算排列完成 
            }
        }
    }

    constructPermutation(chars, ""); // 把chars传入函数 进行排列，结果存储在perms数组中

    var resultArr = perms.filter(function(element, index) { // 对perms数组里面的值进行判断，过滤掉字符串是重复的值 
        return !element.match(/(.)\1+/); // 这里的结果为 true时，会保留当前的元素，存储在新数组里面
    });

    return resultArr.length;
}

permAlone('aab');
//permAlone('abc');