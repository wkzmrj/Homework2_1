1. 请写出两种将Javascript应用到网页的方式

第一种：行内
<input type="button" onclick="alert('Hello World')" />
第二种：html的<script>标签
<head>
<script>
alert('Hello World!');
</script>
</head>
第三种:外部js文件
<script src="main.js"></script>

2. 如何定义一个变量？变量的命名规则有哪些？
使用var定义变量，例如
var a;
a = 3;

命名规范：
1. 驼峰命名法，第一个单词首字母小写，后续单词首字母大写：userName;
2. 不能是数字开头；
3. 不能是关键词和保留字： var  for ;
4. 变量名必须有意义；


3. == 和 === 的区别
== 值的大小相等
=== 值的大小相等，数据类型相等


4. JS的简单数据类型有哪些并简单描述
Number 数字 : 不区分整数、浮点数、特殊值；
String 字符
undefined undefined
Boolean 布尔 : true(1) or false(0)
null null : 当定义变量准备用于保存对象，可以将该变量初始化为null;


5. JS的算数运算符有哪些
()
 *
 %
 /
 +
 -


6. JS的比较运算符有哪些
 >
 <
 >=
 <=
 ==
 ===
 !=
 !==

7. JS的逻辑运算符有哪些
&& 且
|| 或
! 非


8. var i = 100; i++; j = i++;y = ++j;请问j和y分别是多少

 j = 101;
 y = 101;


18. 推导循环执行的顺序，用文字进行说明，并推导出可能的结果。
for(var m = 1,n = 2; m + n < 25; m++){

       n += 3;

       console.log(m);

  }
  第一次输出 1 m=2,n=5
  第二次输出 2 m=3,n=8
  第三次输出 3 m=4,n=11
  第四次输出 4 m=5,n=14
  第五次输出 5 m=6,n=17
  第六次输出 6 m=7,n=20
  因为7 + 20 < 25 是false所以结束循环。

19. 推导循环执行的顺序，用文字进行说明，并推导出可能的结果。

for(var i = 30 ; i > 5 ; i -= 7){
console.log(i--);
}
第一次输出1 i -= 7, 所以 i -- = 22;
第二次输出14；
第三次输入6；
因为i > 5, 所以此处停止循环。

29. JS有几种循环，分别是什么
for 循环
do while 循环
while循环
30. break和continue的区别是什么
break用于完全结束一个循环，跳出循环体执行循环后面的语句。
for (var i = 0; i < 5; i++){
  if (i % 2 ==0){
    break;
  }
  console.log(i);
}
i = 0;
continue只是终止本次循环，接着还执行后面的循环，break则完全终止循环

for(var i=0;i<5;i++){
  if (i % 2 ==0){
    continue;
  }
  console.log(i);
}
i = 1, 3, 5;
