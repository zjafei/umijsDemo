// 为函数定义类型
function add(x: number, y: number): number {
  return x + y;
}

let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number { return x + y; };

// 函数参数的个数
function point(x: number, y: number): { x: number; y: number } {
  return { x, y };
}

point(1);// 少参数
point(1, 1, 0);// 多参数
point(1, 1);

// 参数的默认值和可选参数
function buildName(firstName: string, middleName = '正', lastName?: string) {// 第二个参数有默认值 第三个参数为可选参数
  return lastName ? `${firstName}${middleName} ${lastName}` : firstName;
}

let result1 = buildName("马");                  // 少参数
let result2 = buildName("马", "万", "正");  // 多参数
let result3 = buildName("马", "正");         // 正好

// 剩余参数
function listItem(teacher: string,...students:string[]):string {
  return teacher + ' ' + students.join(' ');
}

// 函数的重载 （函数返回类型，参数的个数，参数的类型决定重载）
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x === "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
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
