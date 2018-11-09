//推断类型的原则是能推断就推断 不能推断就报错
// 初始化值的类型来推断类型
let x = 3;// 初始值的类型
function getBoolean() {// 返回值的类型
  return true
}

// 最佳通用类型 兼容所有候选类型的类型
let y: number[] = [0, 1, null];// number兼容number和null
let z: boolean[] = ['', null, undefined];// boolean并不兼容string

// interface Animal {
// //   name: string;
// };

// class Animal{
//   //   name: string;
// }

class Rhino {
  horn: 1
}
class Elephant {
  nose: 1
}
class Snake {
  scale: 1
}

let zoo: (Rhino | Elephant | Snake)[] = [new Rhino(), new Elephant(), new Snake()];// 三个类型中的任意一类

// 根据三下文的类型判断
window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.button);  //<- Error
};
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
