import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/Shop.component';
import Header from './componetns/header/header.component'
import {setCurrentUser} from './redux/user/user.actions';
import SignInAndSignUpPage from './pages/signin-and-signup/singin-signup.components';
import './App.css';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';

//




class App extends React.Component {
  
 

unsubscribeFromAuth = null


 componentDidMount(){
const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //createUserProfileDocument(user);
   if(userAuth){
     const userRef  = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapshot =>{
        setCurrentUser({
        id:snapshot.id,
        ...snapshot.data()
      
    });
     });
    
    }
    setCurrentUser(userAuth);
   });
 }


 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
  render(){
      
  return (
    <div>
    <Header />
 <Switch>
       <Route exact  path='/' component={HomePage} />
       <Route  path='/shop' component={ShopPage} />
       <Route  path='/signin' component={SignInAndSignUpPage} />
</Switch>
   
    </div>
  );
}
  }

const mapDispatchTopProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchTopProps)( App);
