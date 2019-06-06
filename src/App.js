import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Analytics from './Analytics';
import ProductDetail from './ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <br/><br/>
        {/* <div>
        <Link to="/home">Home ||  </Link>
        <Link to="/analytics">Analytics</Link>
        </div> */}
        <br/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/productDetails/:productGroupId" component={ProductDetail  } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
