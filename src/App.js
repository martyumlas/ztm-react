import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';
import { auth, createUserProfileDocument} from './firebase/firebase'


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
   this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)

      console.log(user)
    })  
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {    
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='signin' element={<Auth/>}/>
          </Routes>
      </Fragment>
    );
  }
}

export default App;
