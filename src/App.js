import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // route orchestrator

import './assets/main.scss';
import logo from './assets/img/logo.png';

const Home = React.lazy(() => import('./containers/Home'));
const EmpresaList = React.lazy(() => import('./containers/Empresa.List'));
const Footer = React.lazy(() => import('./components/Footer'));


function App() {
  return <>
    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark main-header">
        <div className="collapse navbar-collapse" id="navbarNav">
          <span className="navbar-header-title" >
            <img src={logo} alt="logo" width='80' style={{ margin: '0px' }} />
            FAREJADOR DE CNPJ
          </span>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link pointer" to="/">Inicio</Link>
            </li>
            <li className="nav-item pointer">
              <Link className="nav-link pointer" to="/empresa-pesquisar">Pesquisar empresas</Link>
            </li>
          </ul>
          <span id="butInstall" title="Instalar Farejador" className="fas fa-download btn" hidden
            style={{ color: '#FFF', position: 'absolute', top: '30px', right: '30px', border: 'solid 1px #999' }}>
          </span>
        </div>
      </nav>

      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/empresa-pesquisar" component={EmpresaList} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  </>
}

export default App;
