import React from 'react';

// -------接口篇

export default () => {

  // interface SquareConfig {
  //   color?: string;
  //   width?: number;
  // }
  // function createSquare(config: SquareConfig): {color: string; area: number} {
  //   let newSquare = {color: "white", area: 100};
  //   if (config.color) {
  //     newSquare.color = config.color;
  //   }
  //   if (config.width) {
  //     newSquare.area = config.width * config.width;
  //   }
  //   return newSquare;
  // }
  // let mySquare = createSquare({color: "black"});
  // console.log(mySquare);


  //  -------

  // readonly只读属性  
  interface Point {
    readonly x: number,
    readonly y: number,
  }
  // 通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
  let pl: Point = { x: 10, y: 22 };
  // pl.x = 5;
  // console.log(pl);

  // ReadonlyArray 只读数组
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // ro[0] = 12; // error!
  // ro.push(5); // error!
  // ro.length = 100; // error!
  // 可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写  a = ro as number[]; // success
  // a = ro; // error!


  // ----------      类类型 -------------
  // class Animal {
  //   name: string;
  //   constructor(theName: string) { this.name = theName; console.log(theName, 111111); }
  //   move(distanceInMeters: number = 0) {
  //     console.log(`${this.name} moved ${distanceInMeters}m.`);
  //   }
  // }
  // class Snake extends Animal {
  //   constructor(name: string) { super(name); console.log(name, 222222); }
  //   move(distanceInMeters = 5) {
  //     console.log("Slithering...");
  //     super.move(distanceInMeters);
  //   }
  // }
  // class Horse extends Animal {
  //   constructor(name: string) { super(name); console.log(name, 333333333); }
  //   move(distanceInMeters = 45) {
  //     console.log("Galloping...");
  //     super.move(distanceInMeters);
  //   }
  // }
  // let sam = new Snake("Sammy the Python");
  // let tom: Animal = new Horse("Tommy the Palomino");
  // sam.move();
  // tom.move(34);

  // private 私有的
  // class Animal {
  //   private name: string;
  //   constructor(theName: string) { this.name = theName; }
  // }

  // new Animal("Cat").name; // 错误: 'name' 是私有的.


  // ----------    enum  枚举类型 -------------
  // enum CC {
  //   Up = 1,
  //   Down,
  //   Left,
  //   Right,
  // }

  // enum CCC {
  //   // constant members
  //   None,
  //   Read = 1 << 1,
  //   Write = 1 << 2,
  //   ReadWrite = Read | Write,
  //   // computed member
  //   G = "123".length
  // }
  // console.log(CCC['Read'], 8888);
  // console.log(CCC, 9999);

  // enum CCC {
  //   // constant members
  //   None,
  //   Read = 1 << 1,
  //   Write = 1 << 2,
  //   ReadWrite = Read | Write,
  //   // computed member
  //   G = "123".length
  // }
  // console.log(CCC, 9999);

  // interface Named {
  //   name: string;
  // }
  // let y = { name: 'Alice', location: 'Seattle' };
  // function greet(n: Named) {
  //   console.log('Hello, ' + n.name);
  // }
  // greet(y); // OK


  return (
    <div>

    </div>
  )
}
