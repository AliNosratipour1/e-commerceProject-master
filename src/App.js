import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './componetns/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/singin-signup.components';
import './App.css';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';

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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //createUserProfileDocument(user);
   if(userAuth){
     const userRef  = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapshot =>{

    this.setState({
      currentUser:{
        id:snapshot.id,
        ...snapshot.data()
      }
    });
     });
    
    }
    this.setState({currentUser: userAuth});
   });
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
