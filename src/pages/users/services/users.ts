import { number } from 'prop-types';

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

const someThing = new Animal();
someThing.move(20);

// class的继承
class Dog extends Animal {
  bark() {
    console.log('dog bark Woof! Woof!');
  }
}

const dogA = new Dog();
dogA.bark();
dogA.move(30);

// 派生类
class Snake extends Animal {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  move(distanceInMeters = 5) {
    super.move(distanceInMeters);
    console.log(`${this.name} slithering  ${distanceInMeters}m.`)
  }
}

const snakeA = new Snake('snakeA');
snakeA.move(20);

// public（公开的 全公开） 成员都默认为 public
// protected（受保护的 半公开） 它就不能在声明它的类的外部访问 但是可以被继承的类直接访问
// private（私有的 不公开） 成员被标记成private时，它就不能在声明它的类的外部访问
// readonly（只读的） 只读属性必须在声明时或构造函数里被初始化 且不了被继承类修改
// public protected readonly 修饰符的成员可以被继承类访问 在继承类可以修改该成员的修饰符
class Fish extends Animal {
  // protected name: string;
  private name: string;
  readonly color: string;
  constructor(name: string) {
    super();
    this.color = 'gray'
    this.name = name;
  }
  public move(distanceInMeters = 5) {
    super.move(distanceInMeters);
    console.log(`${this.name} swim ${distanceInMeters}m.`)
  }
  setName(name: string) {
    this.name = name;
  }
}

const fishA = new Fish('fishA');
fishA.move(20);
fishA.setName('fishA bob');
fishA.move(30);

// name不能被调用 修改fish类成员name的修饰符为 protected 就可以了
class Ribbonfish extends Fish {
  // color:string = 'gray';
  // name:string;

  constructor(name: string, public age: number) {// 带有修饰符的参数就是类的成员
    super(name);
    this.color = 'silver';
  }
  public move(distanceInMeters = 5) {
    super.move(distanceInMeters);
    console.log(`${this.color} ribbonfish name is ${this.name} swim ${distanceInMeters}m.`)
  }
}

/**
 * 当我们比较带有 private或 protected成员的类型的时候，情况就不同了。
 * 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
 * 对于 protected成员也使用这个规则。
 */
class Demo {
  // 类的静态成员就是类自己的属性和方法
  static type: string = 'this is Demo class';
  static introduction = function () {
    console.log(Demo.type);
  };
  private _age: number;
  protected get age() {
    return this._age;
  };
  protected set age(age: number) {// 如果自由get没有set那么自动转为readonly
    this._age = age;
  }
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class FromDemo extends Demo {
  constructor() { super("Rhino"); }
}

class LikeDemo {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let demo = new Demo("Goat");
let fromDemo = new FromDemo();
let likeDemo = new LikeDemo("Bob");

demo = fromDemo;
demo = likeDemo; // 错误: demo 与 likDemo 不兼容.


// 抽象类是不能够被实例化的类 但是可以被继承 不同于接口 抽象类可以有实现细节的成员和未实现细节的成员
abstract class Plant {
  abstract makeSound(): void;// 未实现细节的成员
  move(): void {// 实现细节的成员
      console.log('roaming the earch...');
  }
}
new Plant();

// 类可以降级为接口
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

new Point();

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
