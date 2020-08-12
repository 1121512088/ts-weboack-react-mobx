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

  return (
    <div>

    </div>
  )
}
