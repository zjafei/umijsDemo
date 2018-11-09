// 泛型 就是对类型的抽象
// 不同于any 类型 any 不能规范 输入与输出的关系的对应
// 泛型函数
function demo<T>(param: T): T {
  return param;
}

function identity<T>(arg: T): T {
  return arg;
}

// 泛型的参数的类型不能确定
demo<string>('');// 输入 string 输出 string
demo<number>(0);// 输入 number 输出 number
demo(true);// 输入 boolean 输出 boolean 这里省略了<boolean>
demo<null[]>([null])// 输入 null 类型的数组 输出 null类型的数组

// 这里的 T 只是一个类型的变量 可以为任意的名称
let newIdentity: <D>(arg: D) => D = function <T>(params: T): T {
  return params;
};

// 泛型函数接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity: GenericIdentityFn = function <D>(params?: D): D {
  return params;
};

// 泛型参数当作整个接口的一个参数
interface GenericIdentityFnParams<T> {
  (arg: T): T;
}

// 具体化了泛型为number
let identityNew: GenericIdentityFnParams<number> = identity;
identityNew(0);

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// 泛型的约束

interface HasLength {
  length: number;
}

function justHasLength<T extends HasLength>(param: T): T {
  return param;
};

justHasLength(true);
justHasLength(0);
justHasLength({length:0});
justHasLength([]);
justHasLength('');

/*********************
 * 泛型就是对类型的抽象
 *********************/

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
