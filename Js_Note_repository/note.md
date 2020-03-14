## 快速入门

```javascript
alert("Hello World!"); // 第一行 JavaScript 代码
```

### 调试

转到「控制台（Console）」，在这个面板里可以直接输入 JavaScript 代码，按回车后执行。

要查看一个变量的内容，在控制台中输入 `console.log(var-name);`，回车后显示的值就是变量的内容。

### 数据类型和变量

#### 数字（number）

JavaScript 不区分整数和浮点数，统一用 number 表示，以下都是合法的 number 类型：

```javascript
123;        // 整数 123
0.456;      // 浮点数 0.456
1.2345e3;   // 科学计数法表示 1.2345×1000，等同于 1234.5
-99;        // 负数
NaN;        // NaN 表示 Not a Number。当无法计算结果时用 NaN 表示
Infinity;   // Infinity 表示无穷大。当数值超过了 JavaScript 的 Number 所能表示的最大值时，就表示为 Infinity
```

number 可以直接做四则运算，规则和数学一致：

```javascript
(1 + 2) * 5 / 2;    // 7.5
2 / 0;              // Infinity
0 / 0;              // NaN
10 % 3;             // 1
```

#### 比较运算符

当对 number 做比较时，可以通过比较运算符得到一个布尔值。实际上，JavaScript 允许对任意数据类型做比较：

```javascript
false == 0;     // true
false === 0;    // false
```

要特别注意相等运算符 `==`。JavaScript 在设计时，有两种比较运算符：

- 第一种是 `==` 比较，它会自动转换数据类型再比较。很多时候，会得到非常诡异的结果；
- 第二种是 `===` 比较，它不会自动转换数据类型。如果数据类型不一致，返回 `false`；如果一致，再比较。

由于 JavaScript 这个设计缺陷，**不要使用 == 比较，应始终坚持使用 === 比较**。

另一个例外是 `NaN` 这个特殊的 number 与所有其他值都不相等，包括它本身：

```javascript
NaN === NaN; // false
```

唯一能判断 `NaN` 的方法是使用 `isNaN()` 函数：

```javascript
isNaN(NaN); // true
```

#### 空（null）和未定义（undefined）

`null` 表示一个“空”的值，`undefined` 表示值“未定义”。

> 在其他语言中，也有类似 JavaScript 的 `null` 的空值，例如 Java 的 `null`、Swift 的 `nil`、Python 的 `None`。

大多数情况下，都应该使用 `null`，`undefined` 仅仅在判断函数参数是否传递的情况下有用。

#### 数组（array）

JavaScript 的数组可以包含**任意数据类型**。例如：

```javascript
[1, 2, 3.14, "Hello", null, true];
```

数组的元素可以通过索引来访问：

```javascript
var arr = [1, 2, 3.14, "Hello", null, true];
arr[0]; // 返回索引为 0 的元素，即 1
arr[5]; // 返回索引为 5 的元素，即 true
arr[6]; // 索引超出了范围，返回 undefined
```

#### 对象（object）

JavaScript 的对象是一组由键－值组成的无序集合，例如：

```javascript
var person = {
    name: "Bob",
    age: 20,
    tags: ["js", "web", "mobile"],
    city: "Beijing",
    hasCar: true,
    zipcode: null
};
```

JavaScript 对象的键都是字符串类型，值可以是任意数据类型。上述 `person` 对象一共定义了 6 个键值对，其中每个键又称为对象的属性。例如，`person` 的 `name` 属性为 `"Bob"`，`zipcode` 属性为 `null`。

#### 变量

在 JavaScript 中，使用 `var` 声明变量。同一个变量可以反复赋值，而且可以是不同类型的值，但是要注意只能声明一次，例如：

```javascript
var a = 123;    // a 的值是整数 123
a = "ABC";      // a 变为字符串 "ABC"
```

> 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言，赋值语句如下：
>
> ```java
> int a = 123;  // a 是整数类型变量，类型用 int 声明
> a = "ABC";    // 错误：不能把字符串赋给整型变量
> ```
>
> 和静态语言相比，动态语言更灵活，就是这个原因。

要显示变量的内容，可以用 `console.log(var-name)`，打开 Chrome 的控制台就可以看到结果。使用 `console.log()` 代替 `alert()` 的好处是可以避免弹出烦人的对话框。

#### 严格模式

JavaScript 在设计之初，为了方便初学者学习，并不强制要求使用 `var` 声明变量。这个设计错误带来了严重的后果，未使用 `var` 声明的变量将会被视为全局变量：

```javascript
i = 10; // i 现在是全局变量
```

JavaScript 在后来推出了严格模式，强制要求使用 `var` 声明变量，否则将导致运行错误。

启用严格模式的方法是在 JavaScript 代码的第一行写上：

```javascript
"use strict";
```

这是一个字符串，不支持严格模式的浏览器会把它当做一个字符串语句执行，支持严格模式的浏览器将开启严格模式运行 JavaScript。

> 不用 `var` 声明的变量会被视为全局变量。为了避免这一缺陷，所有的 JavaScript 代码都应该使用严格模式。在后面编写的 JavaScript 代码将全部采用严格模式。

### 字符串

#### 多行字符串

由于多行字符串用 `\n` 写起来比较费事，所以 JavaScript 支持一种更简洁的方法——用反引号 ``…`` 表示。

```javascript
console.log(`多行
字符串
测试`);
```

#### 模板字符串

要把多个字符串连接起来，可以用 `+` 号连接，而在变量很多的时候这样就显得很麻烦。JavaScript 支持一种模板字符串，表示方法同样是使用反引号，但是它会自动替换字符串中的变量：

```javascript
var name = "小明";
var age = 20;
var message = `你好，${name}，你今年 ${age} 岁了！`;
console.log(message);
```

#### 操作字符串

要获取字符串某个指定位置的字符，使用类似数组的下标操作，索引号从 0 开始。

需要特别注意的是，**字符串是不可变的**。如果对字符串的某个索引赋值，不会有任何错误，但也没有任何效果：



```javascript
var s = "Test";
s[0] = "X";
console.log(s); // s 仍然为 "Test"
```

JavaScript 为字符串提供了一些常用方法。注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串：

##### indexOf

`indexOf()` 会搜索指定字符串出现的位置：



```javascript
var s = "hello, world";
s.indexOf("world"); // 返回 7，即子串的首字符的位置
s.indexOf("World"); // 没有找到指定的子串，返回 -1
```

##### substring

`substring()` 返回指定索引区间的子串：

```javascript
var s = "hello, world";
s.substring(0, 5);  // 从索引 0 开始到 5（不包括 5），返回 "hello"
s.substring(7);     // 从索引 7 开始到结束，返回 "world"
```

### 数组

要取得数组的长度，直接访问 `length` 属性。

需要注意的是，**直接给数组的 length 赋一个新的值会导致数组大小的变化**：

```javascript
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr 加长为 [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr 缩短为 [1, 2]
```

数组可以通过索引把对应的元素修改为新的值。

同样需要注意的是，如果通过索引赋值时，索引超过了范围，同样会引起数组大小的变化：

```javascript
var arr = [1, 2, 3];
arr[5] = "x";
arr; // arr 变为 [1, 2, 3, undefined, undefined, "x"]
```

> 其它多数编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript 的数组却不会有任何错误。在编写代码时，不建议直接修改数组的大小，访问索引时要确保索引不会越界。

#### 数组的方法

##### slice

`slice()` 对应于对应字符串中的 `substring()`，它截取数组的部分元素，然后返回一个新的数组：

```javascript
var arr = ["A", "B", "C", "D", "E", "F", "G"];
arr.slice(0, 3);    // 索引范围 [0, 3): ["A", "B", "C"]
arr.slice(3);       // 从索引 3 开始到结束: ["D", "E", "F", "G"]
```

如果不给 `slice()` 传递任何参数，就会从头到尾截取所有元素。利用这一点可以很容易地复制一个数组：

```javascript
var arr = ["A", "B", "C", "D", "E", "F", "G"];
var aCopy = arr.slice();
aCopy;          // ["A", "B", "C", "D", "E", "F", "G"]
aCopy === arr;  // false
```

> 同理，也可以不给字符串的 `substring()` 传递参数以得到复制的字符串：
>
> ```javascript
> var s = "Hello, World!";
> var sCopy = s.substring();
> sCopy; // "Hello, World!"
> sCopy === s; // true
> ```

##### push 和 pop

`push()` 向数组的末尾添加若干元素，`pop()` 则删除数组的末元素：



```javascript
var arr = [1, 2];
arr.push("A", "B");                 // 返回数组新的长度: 4
arr;                                // [1, 2, "A", "B"]
arr.pop();                          // pop() 返回 "B"
arr;                                // [1, 2, "A"]
arr.pop(); arr.pop(); arr.pop();    // 连续 pop 三次
arr;                                // []
arr.pop();                          // 空数组继续 pop 不会报错，而是返回 undefined
arr;                                // []
```

##### unshift 和 shift

`unshift()` 往数组的头部添加若干元素，`shift()` 则删除数组的首元素：

```javascript
var arr = [1, 2];
arr.unshift("A", "B");                  // 返回数组新的长度: 4
arr;                                    // ["A", "B", 1, 2]
arr.shift();                            // "A"
arr;                                    // ["B", 1, 2]
arr.shift(); arr.shift(); arr.shift();  // 连续 shift 三次
arr;                                    // []
arr.shift();                            // 空数组继续 shift 不会报错，而是返回 undefined
arr;                                    // []
```

##### sort

`sort()` 可以对当前数组进行排序，它会直接修改当前数组的元素位置。直接调用时，按照默认顺序排序：

```javascript
var arr = ["B", "C", "A"];
arr.sort();
arr; // ["A", "B", "C"]
```

至于按照指定的顺序排序，将会在后面的函数中讲到。

##### reverse

`reverse()` 把整个数组的元素反转：

```javascript
var arr = ["one", "two", "three"];
arr.reverse();
arr; // ["three", "two", "one"]
```

##### splice

`splice()` 是修改数组的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

```javascript
var arr = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"];
// 从索引 2 开始删除三个元素，然后再添加两个元素：
arr.splice(2, 3, "Google", "Facebook"); // 返回删除的元素 ["Yahoo", "AOL", "Excite"]
arr;                                    // ["Microsoft", "Apple", "Google", "Facebook", "Oracle"]
// 只删除，不添加：
arr.splice(2, 2);                       // ["Google", "Facebook"]
arr;                                    // ["Microsoft", "Apple", "Oracle"]
// 只添加，不删除：
arr.splice(2, 0, "Google", "Facebook"); // 返回空数组，因为没有删除任何元素
arr;                                    // ["Microsoft", "Apple", "Google", "Facebook", "Oracle"]
```

##### concat

`concat()` 把当前数组和另一个数组连接起来，并返回一个新的数组：

```javascript
var arr = ["A", "B", "C"];
var added = arr.concat([1, 2, 3]);
added;  // ["A", "B", "C", 1, 2, 3]
arr;    // ["A", "B", "C"]
```

实际上，`concat()` 可以接收任意个元素和数组，并且自动把数组拆开，然后全部添加到新的数组里：

```javascript
var arr = ["A", "B", "C"];
arr.concat(1, 2, [3, 4]); // ["A", "B", "C", 1, 2, 3, 4]
```

##### join

`join()` 是一个非常实用的方法，它把当前数组的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

```javascript
var arr = ["A", "B", "C", 1, 2, 3];
arr.join("-"); // "A-B-C-1-2-3"
```

如果数组的元素不是字符串，将自动转换为字符串后再连接。

#### 多维数组

如果数组的某个元素又是一个数组，则可以形成多维数组，例如：

```javascript
var arr = [[1, 2, 3], [400, 500, 600], "-"];
```

上述数组包含三个元素，其中头两个元素本身也是数组。

### 对象

JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。

访问对象的属性通过 `.` 操作符完成，但这要求属性名必须是一个**有效的变量名**。如果属性名包含特殊字符，就必须用引号括起来：

```javascript
var xiaohong = {
    name: "小红",
    "middle-school": "No.1 Middle School"
};
```

`xiaohong` 的属性名 `middle-school` 不是一个有效的变量，就需要用引号括起来。访问这个属性也无法使用 `.` 操作符，必须用 `["xxx"]` 来访问：

```javascript
xiaohong["middle-school"];  // "No.1 Middle School"
xiaohong["name"];           // "小红"
xiaohong.name;              // "小红"
```

> 在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 `object.property` 的形式访问一个属性了。

由于 JavaScript 的对象是动态类型，因此可以自由地给一个对象添加或删除属性：

```javascript
var xiaoming = {
    name: "小明"
};
xiaoming.age;               // undefined
xiaoming.age = 18;          // 新增一个 age 属性
xiaoming.age;               // 18
delete xiaoming.age;        // 删除 age 属性
xiaoming.age;               // undefined
delete xiaoming["name"];    // 删除 name 属性
xiaoming.name;              // undefined
delete xiaoming.school;     // 删除一个不存在的 school 属性不会报错
```

如果要检测 `xiaoming` 是否拥有某一属性，可以用 `in` 操作符：

```javascript
var xiaoming = {
    name: "小明",
    birth: 1990,
    school: "No.1 Middle School",
    height: 1.70,
    weight: 65,
    score: null
};
"name" in xiaoming;     // true
"grade" in xiaoming;    // false
```

不过需要注意的是，如果 `in` 判断一个属性存在，这个属性不一定是 `xiaoming` 本身的，它可能是 `xiaoming` 继承得到的：

```javascript
"toString" in xiaoming; // true
```

因为 `toString` 定义在 `object` 对象中，而所有对象最终都会在原型链上指向 `object`，所以 `xiaoming` 也拥有 `toString` 属性。

要判断一个属性是否是 `xiaoming` 自身拥有的，而不是继承得到的，可以用 `hasOwnProperty()` 方法：

```javascript
var xiaoming = {
    name: "小明"
};
xiaoming.hasOwnProperty("name");        // true
xiaoming.hasOwnProperty("toString");    // false
```

### 条件判断

在 `if (condition) { … }` 中，条件逻辑语句 `condition` 的结果有时不是布尔值。

JavaScript 把 `null`、`undefined`、`0`、`NaN` 和空字符串 `""` 视为 `false`，其它值一律视为 `true`。

### 循环

#### for … in

`for` 循环的一个变体是 `for … in` 循环，它可以把**一个对象的所有属性**依次循环出来：



```javascript
var o = {
    name: "Jack",
    age: 20,
    city: "Beijing"
};
for (var key in o) {
    console.log(key); // "name"，"age"，"city"
}
```

要过滤掉对象继承的属性，用 `hasOwnProperty()` 来实现：



```javascript
var o = {
    name: "Jack",
    age: 20,
    city: "Beijing"
};
for (var key in o) {
    if (o.hasOwnProperty(key))
        console.log(key); // "name"，"age"，"city"
}
```

由于数组也是对象，而其每个元素的索引被视为对象的属性，因此 `for … in` 循环可以直接循环出数组的索引：



```javascript
var a = ["A", "B", "C"];
for (var i in a) {
    console.log(i);     // "0"，"1"，"2"
    console.log(a[i]);  // "A"，"B"，"C"
}
```

注意，**for … in 对数组循环得到的是字符串，而不是 Number**。

### Map 和 Set

JavaScript 默认的对象表示方式 `{}` 可以视为其它编程语言中的 `Map` 或 `Dictionary` 的数据结构，即一组键值对。

但是 JavaScript 的对象有个小问题，就是键必须是字符串。但实际上 `Number` 或者其它数据类型作为键也是非常合理的。

为了解决这个问题，JavaScript 引入了新的数据类型 `Map`。

#### Map

`Map` 是一组键值对的结构，具有极快的查找速度。

举个例子，现在要根据学生的名字查找对应的成绩，若用数组实现，需要两个数组：

```javascript
var names = ["Michael", "Bob", "Tracy"];
var scores = [95, 75, 85];
```

给定一个名字，要查找对应的成绩，就先要在 `names` 中找到对应的位置，再从 `scores` 中取出对应的成绩。数组越长，耗时越长。

若用 `Map` 实现，只需要一个“名字”－“成绩”的对照表，直接根据名字查找成绩。无论这个表有多大，查找速度都不会慢。实现如下：

```javascript
var m = new Map([
    ["Michael", 95],
    ["Bob", 75],
    ["Tracy", 85]
]);
m.get("Michael"); // 95
```

创建 `Map` 需要一个二维数组，或者直接创建一个空 `Map`：

```javascript
var m = new Map();
m.set("Adam", 67);  // 添加新的键值对
m.has("Adam");      // 是否存在键「Adam」：true
m.get("Adam");      // 67
m.delete("Adam");   // 删除键「Adam」
m.get("Adam");      // undefined
```

由于一个键只能对应一个值，所以，多次对一个键放入值，后面的值会替代前面的值：

```javascript
var m = new Map();
m.set("Adam", 67);
m.set("Adam", 88);
m.get("Adam"); // 88
```

#### Set

`Set` 和 `Map` 类似，也是一组键的集合，但不存储值。由于键不能重复，所以在 `Set` 中没有重复的键。

要创建一个 `Set`，需要提供一个数组作为输入，或者直接创建一个空 `Set`：

```javascript
var s1 = new Set();             // 空 Set
var s2 = new Set([1, 2, 3]);    // 含 1、2、3
```

重复元素在 `Set` 中自动被过滤：

```javascript
var s = new Set([1, 2, 3, 3, "3"]);
s; // Set {1, 2, 3, "3"}
```

通过 `add(key)` 方法可以添加元素到 `Set` 中，可以重复添加，但不会有效果：

```javascript
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```

通过 `delete(key)` 方法可以删除元素：

```javascript
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```

### 迭代（iterable）

遍历数组可以采用下标循环，遍历 `Map` 和 `Set` 就无法使用下标。为了统一集合类型，引入了新的 `iterable` 类型，数组、`Map` 和 `Set` 都属于 `iterable` 类型。

具有 `iterable` 类型的集合可以通过新的 `for … of` 循环来遍历。

`for … in` 循环由于历史遗留问题，它遍历的实际上是**对象的属性名称**。一个数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

当手动给数组添加了额外的属性后，`for … in` 循环将带来意想不到的意外效果：

```javascript
var a = ["A", "B", "C"];
a.name = "Hello";
for (var x in a) {
    console.log(x); // "0", "1", "2", "name"
}
```

而这往往不是想要的。

`for … of` 循环则完全修复了这些问题，它只循环集合本身的元素：

```javascript
var a = ["A", "B", "C"];
a.name = "Hello";
for (var x of a) {
    console.log(x); // "A", "B", "C"
}
```

然而，更好的方式是直接使用 `iterable` 内置的 `forEach()` 方法，它接收一个函数，每次迭代就自动回调该函数。以数组为例：

```javascript
var a = ["A", "B", "C"];
a.forEach(function (element, index, array) {
    // element: 指向当前元素
    // index: 指向当前索引
    // array: 指向数组本身
    console.log("[" + element + ", index = " + index + "]"); // [A, index = 0]，[B, index = 1]，[C, index = 2]
});
```

`Set` 与数组类似，但 `Set` 没有索引，因此回调函数的前两个参数都是元素本身：

```javascript
var s = new Set(["A", "B", "C"]);
s.forEach(function (element, sameElement, set) {
    console.log(element); // "A"，"B"，"C"
});
```

`Map` 的回调函数参数依次为值、键和 `Map` 本身：

```javascript
var m = new Map([
    [1, "x"],
    [2, "y"],
    [3, "z"]
]);
m.forEach(function (value, key, map) {
    console.log(value); // "x"，"y"，"z"
});
```

如果对某些参数不感兴趣，由于 JavaScript 的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得数组的元素：

```javascript
var a = ["A", "B", "C"];
a.forEach(function (element) {
    console.log(element); // "A"，"B"，"C"
});
```

以及获得 `Map` 的键：

```javascript
var m = new Map([
    ["Michael", 95],
    ["Bob", 75],
    ["Tracy", 85]
]);
m.forEach(function (value, key) {
    console.log(key); // "Michael"，"Bob"，"Tracy"
});
```

## 函数

### 函数定义和调用

#### 定义函数

在 JavaScript 中，定义函数的方式如下：

```javascript
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

> 如果没有 `return` 语句，函数执行完毕后会返回 `undefined`。

由于 JavaScript 的函数也是一个对象，上述定义的 `abs()` 函数实际上是一个函数对象，而函数名 `abs` 可以视为指向该函数的变量。

因此，第二种定义函数的方式如下：

```javascript
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
```

在这种方式下，`function (x) { … }` 是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量 `abs`，所以通过变量 `abs` 就可以调用该函数。

上述两种定义**完全等价**，注意第二种方式按照完整语法需要在函数体末尾加一个 `;`，表示赋值语句结束。

#### 调用函数

调用函数时，按顺序传入参数即可。

传入的参数比定义的少也没有问题：

```javascript
abs(); // 返回 NaN
```

此时 `abs(x)` 函数的参数 `x` 将收到 `undefined`，计算结果为 `NaN`。

要避免收到 `undefined`，可以对参数进行检查：

```javascript
function abs(x) {
    if (typeof x !== "number") {
        throw "Not a Number";
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

#### arguments

JavaScript 有一个关键字 `arguments`，它只在函数内部起作用，并且指向当前函数的调用者传入的所有参数。`arguments` 类似数组但它不是一个数组：

```javascript
function foo(x) {
    console.log("x = " + x); // 10
    for (var i = 0; i < arguments.length; i++) {
        console.log("arg " + i + " = " + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

/*
x = 10
arg 0 = 10
arg 1 = 20
arg 2 = 30
*/
```

利用 `arguments`，可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：

```javascript
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs();      // 0
abs(10);    // 10
abs(-9);    // 9
```

实际上 `arguments` 最常用于判断传入参数的个数。可能会看到这样的写法：

```javascript
// foo(a[, b], c)
// 接收 2～3 个参数，b 是可选参数。如果只传两个参数，b 默认为 null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是 a 和 b，c为 undefined
        c = b; // 把 b 赋给c
        b = null; // b 变为默认值
    }
    // …
}
```

#### rest 参数

由于 JavaScript 函数允许接收任意个参数，于是就不得不用 `arguments` 来获取所有参数：

```javascript
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log("a = " + a);
    console.log("b = " + b);
    console.log(rest);
}
```

后来引入了 `rest` 参数，上面的函数可以改写为：



```javascript
function foo(a, b, ...rest) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
/*
a = 1
b = 2
[ 3, 4, 5 ]
*/

foo(1);
/*
a = 1
b = undefined
[]
*/
```

`rest` 参数只能写在最后，前面用 `...` 标识。从运行结果可知，传入的参数先绑定 `a`、`b`，多余的参数以数组形式交给变量 `rest`。所以不再需要 `arguments` 就获取了全部参数。

如果传入的参数连正常定义的参数都没填满，也不要紧，`rest` 参数会接收一个空数组（注意不是 `undefined`）。

