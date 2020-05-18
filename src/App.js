import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/main.scss';


import Header from './components/Header';
import Footer from './components/Footer';
const Home = React.lazy(() => import('./containers/Home'));
const EmpresaList = React.lazy(() => import('./containers/Empresa.List'));


function App() {
  return <>
    <Router>
      <Header />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/empresa-pesquisar" component={EmpresaList} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </>
}

export default App;
