import React from 'react';

export default () => {
  // 基础类型

  const bol: boolean = true;
  const num: number = 789;
  const str: string = '123';

  // 数组
  const list: number[] = [1, 2, 3, 4];
  const list2: Array<number> = [1, 2, 3, 4];

  // 元组 Tuple
  // let x: [string, number] = [1, '2'];
  let x: [string, number]
  x = ['1', 2];
  // 访问一个越界的元素，会使用联合类型替代：
  // x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

  // 枚举 enum
  enum Color { Red, Bule, Green };
  const c: Color = Color.Red;
  // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
  enum Color2 { Red = 1, Bule, Green };
  const c2: Color2 = Color2.Red;
  // console.log(c2, 9);
  // 或者，全部都采用手动赋值：
  enum Color3 { Red = 4, Bule = 1, Green = 2 };
  const c3: Color3 = Color3.Red;
  // console.log(c3, 9);
  // 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
  enum Color4 { Red = 4, Bule = 1, Green = 2 };
  const c4: String = Color4[4]; // 4 对应着下标
  // console.log(c4, 9);

  // Any 
  const Any_any: any = 113;
  
  return (
    <div>
      demo:
      <br />
      {`${num}${str}`}
    </div>
  )
}
