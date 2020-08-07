import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import Demo from '@/containers/views/Demo';

function Loading() {
  return <div>Loading...</div>
}

const Home = Loadable({
  // /* webpackChunkName: "home" */ netWork 请求资源 名字 不设置 将为 0.js
  loader: () => import(/* webpackChunkName: "home" */'@/containers/views/Home'),
  loading: Loading,
});

const Mine = Loadable({
  loader: () => import(/* webpackChunkName: "mine" */'@/containers/views/Mine'),
  loading: Loading,
});

const Page = Loadable({
  loader: () => import(/* webpackChunkName: "page" */'@/containers/views/Page'),
  loading: Loading,
});

@hot(module)

class App extends React.Component {

  render() {

    return (
      <div>

        <Demo />

        <br/>
        <br/>
        <br/>

        <Router>
          <NavLink to="/home">home</NavLink>
          <br />
          <NavLink to="/mine">mine</NavLink>
          <br />
          <NavLink to="/page">page</NavLink>
          <br />
        </Router>
        <br />
        <br />

        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/mine" component={Mine}></Route>
            <Route exact path="/page" component={Page}></Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
