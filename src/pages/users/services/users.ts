import { number } from 'prop-types';

//类型兼容性
//typescript的类型是基于数据结构的 所以下面的代码是正确的 （在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。）
interface Named {
  name: string;
}
class Person {
  name: string;
}

let eric: Named = new Person();

//TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。
interface Named {
  name: string;
}

interface Duck {
  fly: true
}
let x: Named;
let d: Duck;

// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
d = y;// 属性不兼容 就是 y 至少要包含 x 的所有属性


// 比较两个函数的兼容性
let xF = (x: number) => 0;
let yF = (x: number, y: string) => 0;
yF = xF;
xF = yF;// 参数的兼容性

let uF = () => ({ name: 'Alice' });
let vF = () => ({ name: 'Alice', location: 'Seattle' });
uF = vF;
vF = uF;// 返回值的兼容性

//函数参数双向协变
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));

//枚举(枚举也是类型与 class 不同在于 枚举限定了实例个数)
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status = Status.Ready;
status = Color.Green;  // Error


// 类 只比较类的实例部分（属性 方法 修饰符） 因为产出对象的数据形式是clas存在的意义
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) { }
}

class Size {
  feet: number;
  constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK


//泛型 因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型
interface Empty<T> {//泛型接口
}
let x: Empty<number>;//实现类型
let y: Empty<string>;

x = y;  // 结构相同 兼容

interface NotEmpty<T> {//泛型接口
  data: T;// 属性类型决定于泛型的具体化
}
let m: NotEmpty<number>;//实现类型
let n: NotEmpty<string>;

m = n;  //结构不同 不兼容


let identity = function<T>(x: T): T {
  // ...
}

let reverse = function<U>(y: U): U {
  // ...
}

identity = reverse;  // 兼容 还在泛型阶段 要是具体化的时候指定的类型不同那么就不兼容了


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
