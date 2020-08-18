import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>
}

// const Home = Loadable({
//   // /* webpackChunkName: "home" */ netWork 请求资源 名字 不设置 将为 0.js
//   loader: () => import(/* webpackChunkName: "home" */'@/containers/views/Home'),
//   loading: Loading,
// });

@hot(module)

class App extends React.Component {

  render() {

    const arr = [
      'Home', 'Mine', 'Page',
      // 'Demo', 'Demo1', 
      'Demo2'
    ];

    return (
      <div>

        <br />
        <br />
        <br />

        <Router>
          {
            arr.map(item => {
              return (
                <div key={item}>
                  <NavLink to={`/${item.toLocaleLowerCase()}`}>{item}</NavLink>
                </div>
              )
            })
          }
        </Router>
        <br />
        <br />

        <Router>
          <Switch>
            {
              arr.map(item => {

                return (
                  <Route key={item} exact path={`/${item.toLocaleLowerCase()}`} component={
                    Loadable({
                      // 引入变量，使用[request]来告诉webpack，这里的值是根据后面传入的字符串来决定，本例中就是变量item的值
                      loader: () => import(/* webpackChunkName: "[request]" */`@/containers/views/${item}`),
                      loading: Loading,
                    })
                  } />
                )
              })
            }
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
