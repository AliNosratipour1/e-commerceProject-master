import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './componetns/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/singin-signup.components';
import './App.css';
import {auth} from './firebase/firebase.utils';

//




class App extends React.Component {
  
 constructor(){
   super();

   this.state = {
     currentUser: null
   }
 }

unsubscribeFromAuth = null


 componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({currentUser:user});
   })
 }


 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
  render(){
      
  return (
    <div>
    <Header currentUser= {this.state.currentUser}/>
 <Switch>
       <Route exact  path='/' component={HomePage} />
       <Route  path='/shop' component={ShopPage} />
       <Route  path='/signin' component={SignInAndSignUpPage} />
</Switch>
   
    </div>
  );
}
  }


export default App;
