var num = parseInt(prompt('请输入一个数字：'));

if(num % 5 == 0 && num % 6 == 0)
{
alert('这个数字能同时被5和6整除');
} else if (num % 5 != 0 && num % 6 == 0) {
alert('这个数字能被6整除，但是不能被5整除');
} else if (num % 5 == 0 && num % 6 != 0){
alert('这个数字能被5整除，但是不能被6整除');
} else {
alert('这个数字既不能被5整除，也不能被6整除')
}
