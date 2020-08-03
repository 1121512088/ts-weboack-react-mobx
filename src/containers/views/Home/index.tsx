import React from 'react';
import { observer, inject } from 'mobx-react';
import { hot } from 'react-hot-loader';
import { ComponentExt } from '@/utils/reactExt';
import Nike from '@/assets/nike.svg';

interface IProps {
  // 添加了? 所以这个globalStore验证为不一定有  父组件会报错说没有传这个值
  globalStore?: IGlobalStore.GlobalStore,
}

@hot(module)
@inject('globalStore')
@observer
class Home extends ComponentExt<IProps> {

  handleAdd = () => {
    this.props.globalStore.add(0);
  }

  render() {
    const { num } = this.props.globalStore;
    return (
      <div>
        <div>{num}</div>
        <div onClick={this.handleAdd}>增加+++++</div>
        <div>减少</div>
        <Nike width="100" />
      </div>
    )
  }
}

export default Home;
