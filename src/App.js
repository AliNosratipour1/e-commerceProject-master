import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';

//
const  HatePage = () => (
  <div>
    <h1>Hat page</h1>
  </div>
);



function App() {
  return (
    <div>
 <Switch>
       <Route exact  path='/' component={HomePage}/>
       <Route  path='/hats' component={HatePage}/>
</Switch>
   
    </div>
  );
}

export default App;
