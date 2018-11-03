// 定义class的实例属性
interface ClockInterface {// class 的接口定义
  currentTime: Date;
  setTime(d: Date);
}

class ClockA implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

// 如何定义class的构造器函数
// 如何定义class的静态办法(class自己的方法和属性)
interface ClockConstructor {// 规范了构造器函数的实现
  new(hour: number, minute: number): ClockConstructorInterface;
}
interface ClockConstructorInterface {// 规范了实例属性的实现
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockConstructorInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockConstructorInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockConstructorInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

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
