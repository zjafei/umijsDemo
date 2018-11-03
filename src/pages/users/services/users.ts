class Control {// 基本控制器
  private state: any;// private 限制了通过接口去实现
}

interface SelectableControl extends Control {// SelectableControl在Control的基础上添加了select的抽象方法
  select(): void;
}

class Botton extends Control implements SelectableControl {// Botton继承Contrl实现SelectableControl
  select() { }
}

class CheckBox extends Control {

}

interface SS {
  state: any;
  select(): void;
}
class Image implements SelectableControl { // 去掉 Control 的 private 和 这里的 private 不报错了
  private state: any;
  select() { }
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
  console.log(url);
}
