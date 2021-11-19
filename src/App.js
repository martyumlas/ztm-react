import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';
import {db, auth, createUserProfileDocument} from './firebase/firebase'
import {doc, onSnapshot} from 'firebase/firestore'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {        
        await createUserProfileDocument(userAuth)
        onSnapshot(doc(db, "users", userAuth.uid), (doc) => {
          this.props.setCurrentUser({
              id: doc.id,
              ...doc.data()
          })
        });
      } else {
        this.props.setCurrentUser(userAuth)
      }
     
    })  
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {    
    return (
      <Fragment>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='signin' element={<Auth/>}/>
          </Routes>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
 