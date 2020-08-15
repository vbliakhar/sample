import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import {Route,Switch} from 'react-router-dom'
import First from './container/First/First'
import Second from './container/Second/Second'
// import Navigation from './components/UI/Navigation/Navigation'
import Third from './container/third/Third'
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/second' component={Second}></Route>
          <Route path='/auth' component={Third}></Route>
          <Route path='/' component={First}></Route>
          <Route render={()=><h1>404 not found</h1>}/>
        </Switch>
      </Layout>
     
      {/* <Navigation>
        <Switch>
          <Route path='/auth' component={Third}></Route>
          <Route path='/page2' component={Second}></Route>
          <Route path='/' component={First}></Route>
          <Route render={()=><h1>404 not found</h1>}/>
        </Switch>
      </Navigation> */}
    </div>
  );
}

export default App;
