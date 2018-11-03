interface StringArray {//定义了一个字符串数组
  readonly [index: number]: string; // readonly 索引签名设置为只读，这样就防止了给索引赋值
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);

const enum Method { get = 'get', post = 'post' };

interface Params {
  readonly host: string; // readonly 表示只读
  version: string;
  url: string;
  params: object;
  method?: string; // ? 表示可选
  [somProp: string]: any;// 表示其他额外的属性
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
