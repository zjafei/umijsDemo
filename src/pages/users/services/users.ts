enum Direction {// 数字枚举默认是从0开始自增长的
  Up,// 0
  Down,// 1
  Left,// 2
  Right// 3
}

enum Orientation {// 根据第一个值自增长
  East = 1,// 1
  South,// 2
  Weat,// 3
  North// 4
}

console.log('Direction.Left is ' + Direction.Left);
console.log('Orientation.Weat is ' + Orientation.Weat);

// 未被赋值的枚举元素不能够放在第一位
function getValue(x) {
  return x
}
enum ValueFromFunction {
  A = getValue(), // 不确定值的枚举元素不能够放在第一位
  B = 2
}

// 字符串枚举
enum Button {
  Up = 'Up',// 0
  Down = 'Down',// 1
  Left = 'Left',// 2
  Right = 'Right'// 3
}

enum Position {
  East = 'East',// 1
  South = 'South',// 2
  Weat = 'Weat',// 3
  North = 'North'// 4
}

// 枚举限制了参数的范围
function useEnum(button: Button, position: Position): string {
  return `use ${button} btton will go to ${position}`;
}

console.log(useEnum(Button.Down, Position.South));

// 异构枚举
enum BooleanLikeHeterogeneousEnum {// 元素的类型不统一不建议这样使用
  No = 0,
  Yes = "YES",
}

//计算的和常量成员
// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
enum E { X } // 这里 X 的值是 0
// 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
enum E1 {
  X,// 0
  Y,// 1
  Z // 2
}
enum E2 {
  A = 1,// 1
  B,// 2
  C// 3
}
/**
 * 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式
 *   - 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
 *   - 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
 *   - 带括号的常量枚举表达式
 *   - 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
 *   - 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
 */
// 就是能确定值的表达式
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length
}

// 联合枚举与枚举成员的类型
/**
 * 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为
 * - 任何字符串字面量（例如： "foo"， "bar"， "baz"）
 * - 任何数字字面量（例如： 1, 100）
 * - 应用了一元 -符号的数字字面量（例如： -1, -100）
 * 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
 * 首先，枚举成员成为了类型！ 例如，我们可以说某些成员 只能是枚举成员的值：
 */
enum ShapeKind {
  Circle = 'circle',// 这里还是代表值
  Square = 'square',
}

interface Circle {
  kind: ShapeKind.Circle;// 这里就已经表示为类型
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square,
  radius: 100,
}
let s: Square = {
  kind: ShapeKind.Square,
  sideLength: 100,
}

enum E3 {
  Foo,
  Bar
}

function f(x: E3) {
  if (x !== E3.Foo || x !== E3.Bar) {
    // 永远输出 true
    // 如果x !== E3.Foo 走前面 如果 x === E3.Foo 走后面
    // 因为 E3.Foo ！== E3.Bar
  }
  if (x === E3.Foo && x === E3.Bar) {
    // 永远输出 false
  }
}

// 运行时的枚举

enum E4 {
  X, Y, Z
}

function f1(obj: { X: number }) {
  return obj.X;
}

console.log(f1(E4));

// 反向映射(字符串枚举成员没有反向映射)
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log ('a:',a);
console.log ('Enum[0]:',Enum[0]);
console.log ('Enum[a]:',Enum[a]);
console.log ('Enum[Enum[a]]:',Enum[Enum[a]]);

// const enum 不可以使用计算量 编译后使用值
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

// 外部枚举
declare enum E5 {
  A = 1,
  B ,
  C = 3
}

const enum Method { get = 'get', post = 'post' };

interface Params {
  readonly host: string; // readonly 表示只读
  version: string;
  url: string;
  params: object;
  method?: string; // ? 表示可选
  [somProp: string]: any;// 表示其他额外的属性
}


export function fetch(
  {
    host = '',
    version = '',
    url,
    params,
    method = Method.get
  }: Params // 通过 interface 来约束函数对象参数的属性类型
): void {// 函数的返回类型
  host = 'sss';
  // console.log(url);
}
