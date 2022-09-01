//switch 第二种写法：

var grade = prompt("请输入分数");
switch (parseInt(grade / 10)) {
  case (grade >= 80):
    alert(
      "你的成绩等级为优秀"
    );
    break;
  case (grade >= 60):
    alert(
      "你的成绩等级为优秀"
    );
    break;
  case 3:
    alert(
      "你的成绩等级为优秀"
    );
    break;
}

//if 的写法
// var grade = prompt("请输入分数");
// if（ grade >= 80) {
//   alert(
//     "你的成绩等级为优秀"
//   );
// } else if (grade >= 60) {
//   alert(
//     "你的成绩等级为优秀"
//   );
// } else {
//   alert(
//     "你的成绩等级为优秀"
//   );
// }
