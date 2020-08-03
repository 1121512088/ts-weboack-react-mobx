import * as React from 'react';
import * as ReactDom from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import App from '@/containers/shared/App';
import Test from '@/components/Test';
import * as store from "./store";

import styles from './index.less';

// 这里面的configure({enforceActions: 'observed'})用于限制被observable(也就是store中添加了@observable)的数据的修改方式，让其只能添加了@action的函数中进行修改。
configure({ enforceActions: 'observed' })

const render = () => {
  ReactDom.render(
    <Provider {...store}>
      {/* <Test /> */}
      <App />
    </Provider>,
    document.querySelector('#app')
  );
}

render();
