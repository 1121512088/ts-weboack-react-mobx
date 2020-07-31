import React from 'react';
import { Button } from 'antd';
import { ComponentExt } from '@/utils/reactExt';

const log = (target: any) => {
  console.log(target);
}

@log

export default class Test extends ComponentExt {

  handleClick = () => {
    this.$message.success('这是一个通知');
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>测试组件</Button>
      </div>
    )
  }
}
