//   用户输入一个数字，然后再输入一个数字。然后弹出警告框

var a = parseInt(prompt('请输入第一个数字'));
var b = parseInt(prompt('请输入第二个数字'));

if (a % 2 == b % 2) {
    alert('你好，这两个数字的奇偶性相同');
} else {
    alert('你好，这两个数字的奇偶性不同');
}
