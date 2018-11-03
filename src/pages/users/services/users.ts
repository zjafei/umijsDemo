interface Counter {
  (prop: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    counter.interval = start;
  };
  counter.interval = 0;
  counter.reset = function () {
    counter.interval = 0;
  };
  return counter;
}

let cer = getCounter();
console.log('from getCounter', cer.interval);
cer(101);
console.log('from cer', cer.interval);
cer.reset();
console.log('from reset', cer.interval);

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
