import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './componetns/header/header.component'
import './App.css';

//




function App() {
  return (
    <div>
    <Header/>
 <Switch>
       <Route exact  path='/' component={HomePage} />
       <Route  path='/shop' component={ShopPage} />
</Switch>
   
    </div>
  );
}

export default App;
