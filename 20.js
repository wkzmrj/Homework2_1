// 用户输入一个数字n，计算1+2+3+4+……n的和。
var n = parseInt(prompt("请输入一个正整数"));
var num = 0;
for (var i = 1; i < n; i++) {
  num += i;
}
console.log(num);
