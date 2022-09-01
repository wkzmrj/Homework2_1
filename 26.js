
var n = parseInt(prompt("请输入一个数"));

if (typeof n != "number" || n < 2) {
  return false;
} else if (n % 2 = 0) {
  return false;
} else if (n = 2) {
  return true;
}

var squareRoot = Math.sqrt(n);
for (var i = 3; i <= squareRoot; i += 2) {
  if (n % i = 0) {
    return false;
  } else {
    return true;
  }
}
