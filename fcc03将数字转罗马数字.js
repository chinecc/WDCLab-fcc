/**
 * Created by chinecc on 2017/1/26.
 */
/*
 * 将给定的数字转换成罗马数字。
 所有返回的 罗马数字 都应该是大写形式
 * */


function Level(i, v, x) {
    this.i = i;
    this.v = v;
    this.x = x;
}

var levels = [];
levels[0] = new Level('I', 'V', 'X');
levels[1] = new Level('X', 'L', 'C');
levels[2] = new Level('C', 'D', 'M');

function calcDigit(d, l) {
    if (l > 2) {
        var str = '';
        for (var m = 1; m <= d * Math.pow(10, l - 3); m++)str += 'M';
        return str;
    } else if (d == 1) {
        return levels[l].i;
    } else if (d == 2) {
        return levels[l].i + levels[l].i;
    } else if (d == 3){
        return levels[l].i + levels[l].i + levels[l].i;
    } else if (d == 4){
        return levels[l].i + levels[l].v;
    } else if (d == 5){
        return levels[l].v;
    } else if (d == 6){
        return levels[l].v + levels[l].i;
    } else if (d == 7){
        return levels[l].v + levels[l].i + levels[l].i;
    } else if (d == 8){
        return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
    } else if (d == 9){
        return levels[l].i + levels[l].x;
    } else{
        return '';
    }
}

function toRoman(n) {
    var r = '';
    n = n + '';  // 将数字类型转为字符串类型
    for (var c = 0; c < n.length; c++){
        r += calcDigit(eval(n.charAt(c)), n.length - c - 1);
    }
    return r;
}

function convert(str) {

    var result;
    result = toRoman(str);
    return result;
}

convert(500);

