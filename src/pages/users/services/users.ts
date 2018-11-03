const enum Method { get = 'get', post = 'post' };

let someValue: string = 'this is a string';
// 类型断言 下面括号里面的代码就是 类型断言 把某个值作为指定的数据类型
let strLength: number = (someValue as string).length;
console.log(strLength);

let { a: asA, b: asB }: { a: string, b: number } = { a: "this is a", b: 0 };//限制属性类型的解构
console.log(asA, asB);

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 20; // 只读属性报错

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any // 使用any类型的额外不确定属性的 解决额外属性检查的问题(个人比较推荐)
};

function createSquare(
  config: SquareConfig
): {
    color: string;
    area: number;
  } {// 函数的返回类型也是可以接口化的
  return { color: '1', area: 0 };
}

createSquare({
  area: '',
  width: 10,
  // color: ''
} as SquareConfig);// 也可以使用断言语句 解决额外属性检查的问题

let squareOptions = { colour: "red", width: 100 };//也可以将这个对象赋值给一个另一个变量 解决额外属性检查的问题
createSquare(squareOptions);

interface Params {
  readonly host: string; // readonly 表示只读
  version: string;
  url: string;
  params: object;
  method?: string; // ? 表示可选
};

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
  console.log(url);
}
